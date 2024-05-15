import{BrowserRouter, Routes, Route, Link,Navigate} from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { DetalleRecetas } from "./pages/DetalleRecetas"
import { Show } from "./admin/Show"
import {Login} from "./pages/login/Login"
import {Register} from "./pages/register/Register"

import"./App.css"
import { Create } from "./admin/Create"
import { Edit } from "./admin/Edit"



/*import"./App.css"*/

export const App = () =>{


  return(
    <BrowserRouter>
      <header>
        <h1 className="title">RECETAS</h1>
      </header>
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/receta/:recetaId" element = {<DetalleRecetas/>}/>
        <Route path="/admin" element={<Show/>}/>
        <Route path="/admin/create" element={<Create/>}/>
        <Route path="/admin/edit/:recetaId" element={<Edit/>}/>
        <Route path="/admin/detail/:recetaId" element={<DetalleRecetas/>}/>
      </Routes>
    </BrowserRouter>
  )
}