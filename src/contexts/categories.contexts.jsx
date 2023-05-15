import {createContext, useState,useEffect} from "react";
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils.js";
// import SHOP_DATA from '../shop-data.js'; This one also we do not need anymore

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
  const [categoriesMap,setCategoriesMap] = useState({});
  // useEffect(()=>{
  //   addCollectionAndDocuments('categories', SHOP_DATA);//it'll create "categories" collection and add all SHOP_DATA
  // },[]) I disabled it because I don't need it anymore It could set documents each time to the database

  useEffect(()=>{
    const getCategoriesMap = async ()=>{
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap();
  },[])
  const value = {categoriesMap};
  
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
