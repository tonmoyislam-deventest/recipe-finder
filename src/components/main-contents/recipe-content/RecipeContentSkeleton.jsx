const RecipeContentSkeleton = () => {
  return (
    <div className="bg-[#3A4358] p-2 rounded-xl overflow-hidden">
      <div className="w-full aspect-[clamp(6/3,6/3,6/2)] sm:aspect-4/2 md:h-35 xl:h-50 bg-[#4A556D] rounded-xl"></div>

      <div className="h-4 w-3/4 bg-[#4A556D] rounded my-2 mx-1"></div>
    </div>
  );
};

export default RecipeContentSkeleton;