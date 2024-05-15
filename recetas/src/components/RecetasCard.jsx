import {Link} from "react-router-dom"
import "./RecetasCard.css"

export const RecetasCard = ({recetaMap})=>{
    
    return(
        <li className="recetasCard">
            <Link to={`/receta/${recetaMap.id}`}>
                <img src={recetaMap.imagen} alt={recetaMap.imagen} className="recetasImage" />
                <small>{recetaMap.nombre}</small>
            </Link>
        </li>
    )
    {/*<li className="peliculasCard">
    <Link to={`/pelicula/${peliculaMap.id}`}>
    <img className="peliculasImage" src={imgURL} alt="IMG"/>
    <small>{peliculaMap.title}</small>
    </Link>
    </li>*/}
}
/*https://www.example.com/tortilla-patatas.jpg*/