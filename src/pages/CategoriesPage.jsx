import Hero from "../components/hero/Hero.jsx";
import CategoriesToolbar from "../components/main-contents/categories-header/CategoriesToolbar.jsx"
import Categories from "../components/main-contents/categories/Categories.jsx"
import RecipeContent from "../components/main-contents/recipe-content/RecipeContent.jsx"

const CategoriesPage = () => {
    return (
        <div className="max-w-337.5 m-auto pb-10">
            <Hero />
            <div className="w-full px-12">
                <CategoriesToolbar />
                <div className="grid grid-cols-1 sm:text-xl md:text-[0.8rem] lg:text-[1rem] md:grid-cols-[1fr_3fr] gap-7">
                    <Categories />
                    <RecipeContent />
                </div>

            </div>
        </div>
    );
};

export default CategoriesPage;