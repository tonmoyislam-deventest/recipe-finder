import { Routes,Route } from "react-router-dom"
import CategoriesPage from "./pages/CategoriesPage"
import DetailsPage from "./pages/DetailsPage"

const App = () => {
  return (
    <div className="bg-[#0E1325] px-3 pt-3 pb-10 w-full ">
      <Routes>
        <Route path="/" element={<CategoriesPage/>}></Route>
        <Route path="/details-page" element={<DetailsPage/>}></Route>
      
      </Routes>
      
    </div>
  )
}

export default App
