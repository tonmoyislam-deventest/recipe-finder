import { Routes,Route } from "react-router-dom"
import CategoriesPage from "./pages/CategoriesPage"
import DetailsPage from "./pages/DetailsPage"
import NotFound from "./components/not-found/NotFound"
import { Navigate } from "react-router-dom"

const App = () => {
      
  return (
    <div className="bg-[#0E1325] px-3 pt-3 w-full ">
      <Routes>
        <Route path="/" element={<Navigate to="/categories" />} />
        <Route path="/categories" element={<CategoriesPage/>}/>
        <Route path="/categories/details-page/:id" element={<DetailsPage/>}/>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
