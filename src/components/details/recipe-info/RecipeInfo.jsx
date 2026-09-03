
const RecipeInfo = () => {
  return (
    <>
        {/* Recipe Image */}
          <img
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1049&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Battenberg Cake"
            className="w-full aspect-4/3 object-cover object-[center_30%] rounded-xl"
          />

          {/* Recipe Name */}
          <h1 className="text-white font-Playfair font-bold text-4xl sm:text-5xl mt-8">
            Battenberg Cake
          </h1>

          {/* Category + Area */}
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <span className="bg-[#3A4358] text-white px-6 py-2 rounded-full">
              category: <span className="font-bold">Desert</span>
            </span>

            <span className="bg-[#3A4358] text-white px-6 py-2 rounded-full">
              area: <span className="font-bold">British</span>
            </span>
          </div>
      
    </>
  )
}

export default RecipeInfo
