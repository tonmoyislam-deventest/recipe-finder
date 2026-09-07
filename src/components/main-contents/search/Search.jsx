import { useContext } from "react";
import { RecipeContext } from "../../all-context/Contexts";

const CategoriesToolbar = () => {
  let { isChangedSortBy, input, setInput, searchedValue, isClickEnter } =
    useContext(RecipeContext);

  return (
    <div className="mt-2 mb-5 sm:mt-10 sm:mb-10 px-4 grid gap-3 sm:grid-cols-3 items-center">
      <search className="sm:col-span-2 h-10 sm:h-12 w-full">
        <form onSubmit={isClickEnter} className="h-full">
          <input
            type="text"
            placeholder="Search recipes and more..."
            value={input}
            className="w-full h-full rounded-full border border-[#3A4358] bg-transparent px-4 sm:px-6 text-white outline-none placeholder:text-[#3A4358]"
            onInput={searchedValue}
          />
        </form>
      </search>

      <div className="w-32.5 sm:w-auto ml-auto sm:col-span-1 px-4 h-10 sm:h-12 bg-[#E5E7EB] rounded-full flex items-center justify-center">
        <select
          className="h-full bg-transparent text-[#0E1325] text-[0.8rem] sm:text-base font-semibold outline-none cursor-pointer"
          onChange={isChangedSortBy}
          defaultValue="name"
        >
          <option value="name">Sort by: Name</option>
          <option value="id">Sort by: ID</option>
        </select>
      </div>
    </div>
  );
};

export default CategoriesToolbar;
