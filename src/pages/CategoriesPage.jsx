import Hero from "../components/hero/Hero.jsx";
import MainContent from "../components/main-contents/MainContent.jsx";

const CategoriesPage = () => {
    return (
        <div className="max-w-337.5 m-auto pb-10">
            <Hero />
            <div className="w-full px-12">
                <MainContent/>
            </div>
        </div>
    );
};

export default CategoriesPage;