
const Ingredients = ({detailsRecipe,setDetailsRecipe}) => {


let ingredients = [];

for (let key in detailsRecipe) {

    if (key.startsWith("strIngredient")) {
        ingredients.push(detailsRecipe[key]);
    }

}
  return (
        <div className="mt-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-10 bg-yellow-300 rounded-full"></div>

              <h2 className="text-white font-bold text-xl">Ingredients</h2>
            </div>

            <ul className="text-white space-y-3 pl-5 list-disc">
              {ingredients.filter(ingredient=> {
                if(ingredient) {
                  return true
                }
              }).map((ingredient,index)=>{
                return <li key={index}>{ingredient}</li>
              })}
            </ul>
          </div>

      
  )
}

export default Ingredients
