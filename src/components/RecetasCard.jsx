import {Link} from "react-router-dom"
import "../css/RecetasCard.css"

export const RecetasCard = ({recetaMap})=>{
    const imgURL = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_A0Pqz4xO2S-N7mk7BtTUhmtgxNsRKaIe6NtS8yFTg&s`;
    return(
        <li className="recetasCard">
            <Link to={`/receta/${recetaMap.id}`} className="recetasCard__Link">
                <picture className="recetaImage__Container">
                    <img src={!recetaMap.imagen.startsWith("https://www.example.com/")?recetaMap.imagen:imgURL} alt={recetaMap.imagen} className="recetasImage" />
                </picture>
                <small className="recetasCard__name">{recetaMap.nombre}</small>
            </Link>
        </li>
    )
}
