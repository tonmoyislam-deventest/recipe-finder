import axios from "axios";
import { createContext, useEffect, useState } from "react"

const CATEGORIES_API_URL = import.meta.env.VITE_API_CATEGORIES

export const RecipeContext = createContext(); 

const Contexts = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        let getData = async ()=>{
            try{
                let response = await axios.get(CATEGORIES_API_URL);
                setCategories(response.data.categories);
            }catch(error){
               setCategories(error);
            }
            

        };
        getData();
    },[])
  return (
        <RecipeContext.Provider value={[categories,setCategories]}>
            {/* APP */}
            {props.children} 
        </RecipeContext.Provider>
      
  )
}

export default Contexts
