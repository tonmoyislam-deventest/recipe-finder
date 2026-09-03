import DetailsHeader from "../components/details/details-header/DetailsHeader";
import Ingredients from "../components/details/ingredients/Ingredients";
import Instruction from "../components/details/instructions/Instruction";
import RecipeInfo from "../components/details/recipe-info/recipeInfo";

const DetailsPage = () => {
  return (
    <div className="max-w-337.5 m-auto px-4 pb-10 sm:px-6 lg:px-8">
      <div className="max-w-290 m-auto">
        {/* header */}
        <DetailsHeader />

        {/* Recipe Content */}
        <div className="max-w-206 m-auto mt-13">
          <RecipeInfo />

          {/* Ingredients */}
          <Ingredients />

          {/* Instructions */}
          <Instruction />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
