import{BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { DetalleRecetas } from "./pages/DetalleRecetas"
import { Show } from "./admin/Show"
import {Login} from "./pages/Login"
import {Register} from "./pages/Register"
import { Create } from "./admin/Create"
import { Edit } from "./admin/Edit"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"


import"./App.css"

export const App = () =>{

  const {currentUser} = useContext(AuthContext);
  const RequireAuth = ({children}) =>{
    return currentUser?children:<Navigate to="/login"/>
  }

  return(
    <BrowserRouter>
      <header>
        <Link to="/" className="title">RECETAS</Link>
      </header>
      <Routes>
        <Route path="/RecetasPage/" element = {<LandingPage/>}/>
        <Route path="/RecetasPage/receta/:recetaId" element = {<DetalleRecetas/>}/>
        <Route path="/RecetasPage/login" element = {<Login/>}/>
        <Route path="/RecetasPage/register" element = {<Register/>}/>
        <Route path="/RecetasPage/admin" element={<RequireAuth> <Show/> </RequireAuth>}/>
        <Route path="/RecetasPage/admin/create" element={<RequireAuth><Create/></RequireAuth>}/>
        <Route path="/RecetasPage/admin/edit/:recetaId" element={<RequireAuth><Edit/></RequireAuth>}/>
        <Route path="/RecetasPage/admin/detail/:recetaId" element={<DetalleRecetas/>}/>
      </Routes>
    </BrowserRouter>
  )
}