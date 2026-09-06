
const RecipeInfo = ({img,name,category,area}) => {
  return (
    <>
        {/* Recipe Image */}
          <img
            src={img}
            alt="Battenberg Cake"
            className="w-full aspect-4/3 object-cover object-[center_30%] rounded-xl"
          />

          {/* Recipe Name */}
          <h1 className="text-white font-Playfair font-bold text-4xl sm:text-5xl mt-8">
            {name}
          </h1>

          {/* Category + Area */}
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <span className="bg-[#3A4358] text-white px-6 py-2 rounded-full">
              category: <span className="font-bold">{category}</span>
            </span>

            <span className="bg-[#3A4358] text-white px-6 py-2 rounded-full">
              area: <span className="font-bold">{area}</span>
            </span>
          </div>
      
    </>
  )
}

export default RecipeInfo
