import { useContext } from "react";
import { RecipeContext } from "../../all-context/Contexts";

const CategoriesToolbar = () => {
  let { isChangedSortBy, input, setInput, searchedValue, isClickEnter } =
    useContext(RecipeContext);
  return (
    <div className="flex w-full flex-col sm:flex-row sm:items-center md:justify-between gap-4">
      {/* search + sort */}
      <h1 className="text-white font-Playfair font-bold text-3xl py-8">
        Categories
      </h1>

      <search>
        <form onSubmit={isClickEnter}>
          <input
            type="text"
            placeholder="Search recipes and more..."
            value={input}
            className="w-full sm:w-87.5 lg:w-90 p-y-20 h-12 rounded-full border border-[#3A4358] bg-transparent px-6 text-white outline-none placeholder:text-[#3A4358]"
            onInput={searchedValue}
          />
        </form>
      </search>

      <div className="h-12 bg-[#E5E7EB] rounded-full px-5 ">
        <select
          className="h-full w-full sm:w-auto rounded-full text-[#0E1325] font-semibold outline-none cursor-pointer"
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
