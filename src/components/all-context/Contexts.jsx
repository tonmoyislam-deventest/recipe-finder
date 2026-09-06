import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CATEGORIES_API_URL = import.meta.env.VITE_API_CATEGORIES;

export const RecipeContext = createContext();

const Contexts = (props) => {
  const [categories, setCategories] = useState([]); //API left
  let [selectCategories, setSelectCategories] = useState("Dessert");
  let [recipes, setRecipes] = useState([]); //API right
  let [sortBy, setSortBy] = useState([]); //API right



  let getCategories = (e) => {
    setSelectCategories(e.target.textContent);
  };

 let isChangedSortBy = (e)=>{
    setSortBy(e.target.value)
 }
  useEffect(() => {
    let getData = async () => {
      try {
        let response = await axios.get(`${CATEGORIES_API_URL}categories.php`);
        setCategories(response.data.categories);
      } catch (error) {
        setCategories(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    let getSelectCategories = async () => {
      try {
        let response = await axios.get(
          `${CATEGORIES_API_URL}filter.php?c=${selectCategories}`,
        );
        setRecipes(response.data.meals);
      } catch (error) {
        setRecipes(error);
      }
    };
    getSelectCategories();
  }, [selectCategories]);

  return (
    <RecipeContext.Provider
      value={{
        categories,
        setCategories,
        getCategories,
        selectCategories,
        recipes,
        setRecipes,
        sortBy,
         setSortBy,
        isChangedSortBy,
      }}
    >
      {/* APP */}
      {props.children}
    </RecipeContext.Provider>
  );
};

export default Contexts;
