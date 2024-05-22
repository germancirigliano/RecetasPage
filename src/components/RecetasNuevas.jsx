import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore"
import { RecetasCard } from "./RecetasCard.jsx";
import { getQueryFilters } from "../js/Filters.js";
import { useLocation } from "react-router-dom";
import "../css/RecetasGrid.css"

export const RecetasNuevas = () => {
    //1. CONFIGURAR USESTATE (HOOK)
    const [recetas, setRecetas] = useState([]);
    const location = useLocation();
    useEffect(()=>{
        const getRecetas = async() => {
            const data = await getDocs(await getQueryFilters(location));
            setRecetas(
                data.docs.map((doc)=>({
                    ...doc.data(), id: doc.id
                }))
            )
        }
        getRecetas()
    }, [location]);


    return (
        <section className="recetasContainer">
            <h1>Nuevas Recetas</h1>
            <ul className="recetasGrid">
                {recetas.map((receta)=>(
                    <RecetasCard key={receta.id} recetaMap={receta}/>
                ))}
            </ul>
        </section>
    )
}