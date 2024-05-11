import{BrowserRouter, Routes, Route, Link} from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { DetalleRecetas } from "./pages/DetalleRecetas"
import { Show } from "./admin/Show"

import"./App.css"


/*import"./App.css"*/

export const App = () =>{
  return(
    <BrowserRouter>
      <header>
        <h1 className="title">RECETAS</h1>
      </header>
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/receta/:recetaId" element = {<DetalleRecetas/>}/>
        <Route path="/admin" element={<Show/>}/>
        <Route path="/admin/create" element="crear"/>
        <Route path="/admin/edit/:id" element="editar"/>
        <Route path="/admin/detail/:recetaId" element={<DetalleRecetas/>}/>
      </Routes>
    </BrowserRouter>
  )
}