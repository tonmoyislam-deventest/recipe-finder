import Hero from "../components/hero/Hero.jsx";
import Search from "../components/main-contents/search/Search.jsx"
import Categories from "../components/main-contents/categories/Categories.jsx"
import RecipeContent from "../components/main-contents/recipe-content/RecipeContent.jsx"

const CategoriesPage = () => {
    return (
        <div className="max-w-360 m-auto pb-10">
            <Hero />
            <div className="grid grid-cols-1 px-4 sm:px-8  sm:text-xl md:text-[0.8rem] lg:text-[1rem] md:grid-cols-[1fr_3fr] gap:4 sm:gap-7">
                <div className="w-full">
                    <h1 className="mt-5 mb-7 sm:mt-10 text-white font-Playfair font-bold text-3xl ">
                        Categories
                    </h1>
                    <Categories />
                </div>
                <div className="w-full">
                    <Search />
                    <RecipeContent />
                </div>
            </div>
        </div>
    );
};

export default CategoriesPage;