import {initializeApp} from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc, //retrieve documents inside firestore db
  getDoc,
  setDoc,
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

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error when creating user", error.message);
    }
  }
  return userDocRef
};
