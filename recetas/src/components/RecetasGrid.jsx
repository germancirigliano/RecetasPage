import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import {collection, getDocs, deleteDoc, doc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"
import { RecetasCard } from "./RecetasCard";
import "./RecetasGrid.css"


export const RecetasGrid = () => {
    //1. CONFIGURAR USESTATE (HOOK)
    const [recetas, setRecetas] = useState([]);
    //2. Referenciamos a la Base de Datos (coleccion) de firestore
    const recetasCollection = collection(db, "recetas");
    //3. Función para mostrar todos los documentos
     // useEffect
    useEffect(()=>{
        const getRecetas = async() => {
            const data = await getDocs(recetasCollection)
            setRecetas(
                data.docs.map((doc)=>({
                    ...doc.data(), id: doc.id
                }))
            )
        }
        getRecetas()
    }, [recetas]);


    return (
        <ul className="recetasGrid">
            {recetas.map((receta)=>(
                <RecetasCard key={receta.id} recetaMap={receta}/>
            ))}
        </ul>
    )
}