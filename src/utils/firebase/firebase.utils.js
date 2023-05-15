import {initializeApp} from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc, //retrieve documents inside firestore db
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCeEbiDpORJ-2XWrTL2BgzAZ9WT-Sjy0W0",
  authDomain: "crwn-clothing-db-9cc9a.firebaseapp.com",
  projectId: "crwn-clothing-db-9cc9a",
  storageBucket: "crwn-clothing-db-9cc9a.appspot.com",
  messagingSenderId: "495958183484",
  appId: "1:495958183484:web:0b5d663c8f4f02a457bd39",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectToAdd.forEach((object)=>{
    const docRef = doc(collectionRef,object.title.toLowerCase())
    batch.set(docRef,object); //doc reference place and the object needed to add on
  })

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async()=>{
  const collectionRef = collection(db, 'categories'); //because we already made the 'categories' key before it exists
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot)=>{
    const {title,items}= docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  },{});
  return categoryMap;
}


export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error when creating user", error.message);
    }
  }
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callbackFunction) =>
  onAuthStateChanged(auth, callbackFunction);
