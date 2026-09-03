import { useContext } from "react"
import { RecipeContext } from "../../all-context/Contexts.jsx"


const Categories = () => {
  const [categories,setCategories] = useContext(RecipeContext);

      console.log(categories);

  return (
    <div className="w-full">
      {/* left */}
      {/* {categories.map()} */}
      <button
        className="h-15 w-full border border-[#E5E7EB] flex items-center text-white overflow-hidden focus:bg-yellow-300 focus:text-black cursor-pointer rounded-xl mb-3 outline-none"
      >
        <img
          src="https://www.themealdb.com/images/category/beef.png"
          className="h-full w-15 -translate-x-4.5 object-fill"
        ></img>
        <p>Beef</p>
      </button>

      {/* <button
        className="h-15 w-full border border-[#E5E7EB] flex items-center text-white overflow-hidden focus:bg-yellow-300 300 focus:text-black cursor-pointer rounded-xl mb-3 outline-none"
      >
        <img
          src="https://www.themealdb.com/images/category/chicken.png"
          className="h-full w-15 -translate-x-4.5 object-fill"
        ></img>
        <p>Chicken</p>
      </button>

      <button
        className="h-15 w-full border border-[#E5E7EB] flex items-center text-white overflow-hidden focus:bg-yellow-300 300 focus:text-black cursor-pointer rounded-xl mb-3 outline-none"
      >
        <img
          src="https://www.themealdb.com/images/category/dessert.png"
          className="h-full w-15 -translate-x-4.5 object-fill"
        ></img>
        <p>Dessert</p>
      </button>

      <button
        className="h-15 w-full border border-[#E5E7EB] flex items-center text-white overflow-hidden focus:bg-yellow-300 300 focus:text-black cursor-pointer rounded-xl mb-3 outline-none"
      >
        <img
          src="https://www.themealdb.com/images/category/lamb.png"
          className="h-full w-15 -translate-x-4.5 object-fill"
        ></img>
        <p>Lamb</p>
      </button>

      <button
        className="h-15 w-full border border-[#E5E7EB] flex items-center text-white overflow-hidden focus:bg-yellow-300 300 focus:text-black cursor-pointer rounded-xl mb-3 outline-none"
      >
        <img
          src="https://www.themealdb.com/images/category/miscellaneous.png"
          className="h-full w-15 -translate-x-4.5 object-fill"
        ></img>
        <p>Miscellaneous</p>
      </button>

      <button
        className="h-15 w-full border border-[#E5E7EB] flex items-center text-white overflow-hidden focus:bg-yellow-300 300 focus:text-black cursor-pointer rounded-xl mb-3 outline-none"
      >
        <img
          src="https://www.themealdb.com/images/category/pasta.png"
          className="h-full w-15 -translate-x-4.5 object-fill"
        ></img>
        <p>Pasta</p>
      </button> */}
    </div>

  )
};

export default Categories;
