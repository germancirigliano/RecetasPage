import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { doc, getDoc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"
import "../css/DetalleRecetas.css"

export const DetalleRecetas = () => {
    const [receta, setReceta] = useState(null);
    const {recetaId} = useParams();

    /*const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;*/
    const imgURL = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_A0Pqz4xO2S-N7mk7BtTUhmtgxNsRKaIe6NtS8yFTg&s`;
    
    useEffect(()=>{
        const getReceta = async() => {
            const recetaRef = doc(db, "recetas", `${recetaId}`)
            const recetaTemp = await getDoc(recetaRef)
            setReceta(recetaTemp.data())
        }
        getReceta()
    }, [recetaId])
    if(!receta){
        return null
    }
    return(
        <>
        <Link className="d-flex justify-content-end" to="/admin">
            <button className="btn btn-primary" type='button'>ADMIN</button>
        </Link>
        <div className="contenedorDetalle">
            <div className="container">
                <div className="contenedorHero">
                    <div className="heroContent">
                        <p className="itemTime">{receta.tiempo_preparacion}</p>
                        <p className="itemName">{receta.nombre}</p>
                        <p className="itemCategory">
                            <strong>Categoría: </strong>
                            {receta.categoria}
                        </p>
                    </div>
                    <div className="imageContainer">
                        <picture className="itemPicture">
                        
                        <img src={!receta.imagen.startsWith("https://www.example.com/")?receta.imagen:imgURL} alt={receta.imagen} className="col itemImage" />
                            {/*<img src={imgURL} alt={receta.nombre} className="col itemImage" />*/}
                        </picture>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="receta__content">
                    <div className="ingredients">
                        <div className="ingredients__content">
                            <div className="ingredients__header">
                                <h2 className="ingredients__title">Ingredientes</h2>
                            </div>
                            <ul className="ingredients__list">
                                {receta.ingredientes.map((ingrediente, index)=>(
                                    <li key={index} className="ingredient">
                                        {ingrediente}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="instructions">
                        <div className="instructions__header">
                            <h2 className="instructions__title">Instrucciones</h2>
                        </div>
                        <ul className="instructions__list">
                            {receta.instrucciones.map((instruccion, index)=>(
                                <li key={index} className="instruction">
                                    {instruccion}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}