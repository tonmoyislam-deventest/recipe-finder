import { useContext } from "react";
import { RecipeContext } from "../../all-context/Contexts.jsx";

const Categories = () => {
  const { categories, setCategories,selectCategories,getCategories } = useContext(RecipeContext);

  
  return (
    <div className="w-full">
      {/* left */}
      {categories.map((elem,index) => {
        return (
          <button key={index} className={`h-15 w-full border border-[#E5E7EB] flex items-center overflow-hidden ${selectCategories === elem.strCategory ?`bg-yellow-300 text-black`: " text-white"} cursor-pointer rounded-xl mb-3 outline-none`} onClick={getCategories}>
            <img
              src={elem.strCategoryThumb}
              className="h-full w-15 -translate-x-4.5 object-fill"
            ></img>
            <p>{elem.strCategory}</p>
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
