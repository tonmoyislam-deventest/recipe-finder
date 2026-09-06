import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CATEGORIES_API_URL = import.meta.env.VITE_API_CATEGORIES;

export const RecipeContext = createContext();

const Contexts = (props) => {
    const [categories, setCategories] = useState([]); //API left
    let [selectCategories, setSelectCategories] = useState("Dessert");
    let [recipes, setRecipes] = useState([]); //API right
    let [sortBy, setSortBy] = useState([]); //API right
    let [input, setInput] = useState("");
    let [fullRecipesById, setfullRecipesById] = useState([]);
    let [search, setSearch] = useState(false);


    let getCategories = (e) => {
        setSelectCategories(e.target.textContent);
        setSearch(false);
        setInput("")
    };

    let isChangedSortBy = (e) => {
        setSortBy(e.target.value);
    };

    let searchedValue = (e) => {
        setInput(e.target.value);
    };

    let isClickEnter = (e) => {
        e.preventDefault();
        setSearch(true);

    };
    

    useEffect(() => {
        let getData = async () => {
            try {
                let response = await axios.get(`${CATEGORIES_API_URL}categories.php`);
                setCategories(response.data.categories);
            } catch (error) {
                // console.log(error);
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
                // console.log(error);
            }
        };
        getSelectCategories();
    }, [selectCategories]);

    // useEffect(() => {
    //     let getRecipesId = async () => {
    //         try {
    //             let fullRecipes = [];
    //             for (let meal of recipes) {
    //                 let response = await axios.get(
    //                     `${CATEGORIES_API_URL}lookup.php?i=${meal.idMeal}`,
    //                 );
    //                 fullRecipes.push(response.data.meals[0]);
    //             }
    //             setfullRecipesById(fullRecipes);

    //         } catch (error) {
    //             alert(error);
    //         }
    //     };

    //     getRecipesId();
    // }, [recipes]);

    useEffect(() => {
    let getRecipesId = async () => {
        try {
            let fullRecipes = await Promise.all(

                recipes.map(async (meal) => {
                    let response = await axios.get(`${CATEGORIES_API_URL}lookup.php?i=${meal.idMeal}`);

                    return response.data.meals[0];
                })
            );

            setfullRecipesById(fullRecipes);

        } catch (error) {
                // console.log(error);
        }
    };
    if (recipes.length > 0) {
        getRecipesId();
    }

}, [recipes]);

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
                input,
                setInput,
                searchedValue,
                isClickEnter,
                fullRecipesById,
                setfullRecipesById,
                search,
                 setSearch,
                 
            }}
        >
            {/* APP */}
            {props.children}
        </RecipeContext.Provider>
    );
};

export default Contexts;
