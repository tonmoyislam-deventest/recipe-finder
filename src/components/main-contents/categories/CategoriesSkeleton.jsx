const CategorySkeleton = () => {
  return (
    <button className="h-13 w-full border border-[#E5E7EB] flex items-center overflow-hidden bg-[#3A4358] cursor-pointer rounded-xl mb-4 outline-none">
      <img
        className="h-full w-15 -translate-x-4.5 object-fill bg-[#4A556D]"
      />

      <p className="h-4 w-24 rounded bg-[#4A556D]"></p>
    </button>
  );
};

export default CategorySkeleton;