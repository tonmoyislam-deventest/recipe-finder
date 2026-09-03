import { Routes,Route } from "react-router-dom"
import CategoriesPage from "./pages/CategoriesPage"
import DetailsPage from "./pages/DetailsPage"
import NotFound from "./components/not-found/NotFound"

const App = () => {
      
  return (
    <div className="bg-[#0E1325] px-3 pt-3 w-full ">
      <Routes>
        <Route path="/" element={<CategoriesPage/>} />
        <Route path="/details-page" element={<DetailsPage/>}/>

        <Route path="*" element={<NotFound/>}></Route>
      
      </Routes>
      
    </div>
  )
}

export default App
