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
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/receta/:recetaId" element = {<DetalleRecetas/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/admin" element={<RequireAuth> <Show/> </RequireAuth>}/>
        <Route path="/admin/create" element={<RequireAuth><Create/></RequireAuth>}/>
        <Route path="/admin/edit/:recetaId" element={<RequireAuth><Edit/></RequireAuth>}/>
        <Route path="/admin/detail/:recetaId" element={<DetalleRecetas/>}/>
      </Routes>
    </BrowserRouter>
  )
}