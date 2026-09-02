import CategoriesToolbar from "./categories-header/CategoriesToolbar";
import Categories from "./categories/Categories";
import RecipeContent from "./recipe-content/RecipeContent";

const MainContent = () => {
  return (
    <>
      <CategoriesToolbar/>
        <div className="grid grid-cols-1 sm:text-xl md:text-[0.8rem] lg:text-[1rem] md:grid-cols-[1fr_3fr] gap-7">
            <Categories/>
            <RecipeContent/>
        </div>

    </>
  );
};

export default MainContent;
