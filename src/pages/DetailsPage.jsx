import { useParams } from "react-router-dom";
import DetailsHeader from "../components/details/details-header/DetailsHeader";
import Ingredients from "../components/details/ingredients/Ingredients";
import Instruction from "../components/details/instructions/Instruction";
import RecipeInfo from "../components/details/recipe-info/recipeInfo";
import { useEffect, useState } from "react";
import axios from "axios";

const RECIPE_DETAILS_API_URL = import.meta.env.VITE_API_RECIPE_DETAILS;

const DetailsPage = () => {
  let [detailsRecipe, setDetailsRecipe] = useState({});

  let prarams = useParams();
  useEffect(()=>{
    let getRecipeDetails = async ()=>{
      try {
        let response = await axios.get(`${RECIPE_DETAILS_API_URL}${prarams.id}`);
        setDetailsRecipe(response.data.meals[0])

      } catch(error){
        console.log(error)

      }

    }
    getRecipeDetails();

  },[prarams])
  return (
    <div className="max-w-337.5 m-auto px-4 pb-10 sm:px-6 lg:px-8">
      <div className="max-w-290 m-auto">
        {/* header */}
        <DetailsHeader />

        {/* Recipe Content */}
        <div className="max-w-206 m-auto mt-13">
          <RecipeInfo img={detailsRecipe.strMealThumb} name={detailsRecipe.strMeal} category={detailsRecipe.strCategory} area={detailsRecipe.strArea}/>

          {/* Ingredients */}
          <Ingredients detailsRecipe={detailsRecipe} setDetailsRecipe={setDetailsRecipe}/>

          {/* Instructions */}
          <Instruction instructions={detailsRecipe.strInstructions}/>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
