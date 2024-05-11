import {Link} from "react-router-dom"
import "./RecetasCard.css"

export const RecetasCard = ({recetaMap})=>{
    
    return(
        <li className="recetasCard">
            <Link to={`/receta/${recetaMap.id}`}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_A0Pqz4xO2S-N7mk7BtTUhmtgxNsRKaIe6NtS8yFTg&s" alt={recetaMap.nombre} className="recetasImage" />
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