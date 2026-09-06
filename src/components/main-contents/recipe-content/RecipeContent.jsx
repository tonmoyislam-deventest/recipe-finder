import { useContext } from "react"
import { RecipeContext } from "../../all-context/Contexts"

const RecipeContent = () => {
    const {recipes, setRecipes} = useContext(RecipeContext);

    return (

        <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[clamp(200px,3vw,250px)] lg:auto-rows-auto gap-5 sm:gap-6 lg:gap-7">

                    {recipes.map((elem,index)=>{
                        return(
                            <div key={index} className="bg-[#3A4358] p-2 rounded-xl overflow-hidden">
                        <img
                            src={elem.strMealThumb}
                            className="w-full aspect-[clamp(6/3,6/3,6/2)] sm:aspect-4/2 md:h-35 xl:h-50 object-cover rounded-xl"
                        />
                        <p className="text-white py-2 px-1">
                            {elem.strMeal}
                        </p>
                    </div>
                        )

                    })}
                    

                    
                </div> 
            
                
                
            </div>

    )
}

export default RecipeContent
