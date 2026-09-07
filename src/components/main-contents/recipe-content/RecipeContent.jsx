import { useContext } from "react"
import { RecipeContext } from "../../all-context/Contexts"
import { Link } from "react-router-dom";

const RecipeContent = () => {
    const { recipes, sortBy, setSortBy, input, setInput, fullRecipesById, setfullRecipesById, search, setSearch } = useContext(RecipeContext);

    let filterdRecipesBySearch = fullRecipesById.filter((recipeById) => {
        let searchValue = input.trim().toLowerCase();

        if (recipeById.strMeal?.toLowerCase().includes(searchValue) || recipeById.strArea?.toLowerCase().includes(searchValue) || recipeById.idMeal?.includes(searchValue) || recipeById.strInstructions?.toLowerCase().includes(searchValue)) {
            return true
            
        } else {
            return false
        }
        
    });



    let selectSort = [...recipes].sort((a, b) => {
        return a.idMeal - b.idMeal;
    });
    let selectSortWithSearch = [...filterdRecipesBySearch].sort((a, b) => {
        return a.idMeal - b.idMeal;
    });

    let displayRecipe = null;

    if (search) {

        if (filterdRecipesBySearch.length > 0 && sortBy === "id") {
            displayRecipe = selectSortWithSearch;

        } else if (filterdRecipesBySearch.length > 0 && sortBy !== "id") {
            displayRecipe = filterdRecipesBySearch;

        } else {
             displayRecipe = [];
        }

    } else {
        if(sortBy === "id") {
            displayRecipe = selectSort;
        }else {
            displayRecipe = recipes
        }

    }

        return (

            <div className="relative grid grid-cols-1 md:grid-cols-3 md:auto-rows-[clamp(200px,3vw,250px)] lg:auto-rows-auto gap-5 sm:gap-6 lg:gap-7">
                
                {displayRecipe.length > 0 ? displayRecipe.map((elem, index) => {

                    return (
                        <Link to={`/categories/details-page/${elem.idMeal}`} key={index}>
                            <div
                                className="bg-[#3A4358] p-2 rounded-xl overflow-hidden"
                            >
                                <img
                                    src={elem.strMealThumb}
                                    className="w-full aspect-[clamp(6/3,6/3,6/2)] sm:aspect-4/2 md:h-35 xl:h-50 object-cover rounded-xl"
                                />

                                <p className="text-white py-2 px-1">
                                    {elem.strMeal}
                                </p>
                            </div>
                        </Link>
                    )
                }) : <p className="text-white text-8xl m-auto h-screen absolute top-20 right-70">Not Found</p>}

            </div>
        )
}

export default RecipeContent