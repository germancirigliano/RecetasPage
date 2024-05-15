import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import {collection, getDocs,  deleteDoc, doc} from 'firebase/firestore';
import {db} from '../firebaseConfig/firebase';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const mySwal = withReactContent(Swal);

export const  Show = () => {
    //1 configurar useState (HOOK)
    const [recetas,setRecetas] = useState([]);
    
    //2 referenciamos a la base de datos (COLLECCION)  de firestore
    const recetasCollection = collection(db,"recetas")
    
    //3 fn para mostrar todos los documentos (getDOCS)
    // va adentro de use effecta para que se actualice solo
    

    
    // 4 fn para elimina un doc
    const deleteReceta = async (id) =>{
        const recetaDoc=doc(db,"recetas",id) //heroescollection
        await deleteDoc(recetaDoc)
    }
    // 5 FN para la confirmacion de SweetAlert
    const confirmDelete = (id) => {
        Swal.fire({
            title: "Esta Seguro?",
            text: "Esto no tiene vuelta atras!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, borralo!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteReceta(id)
                Swal.fire({
                title: "Borrado!",
                text: "Su receta ha sido borrada.",
                icon: "success"
            });
        }
        });
    }
    //6 useefect
    useEffect(()=>{
        //3 fn para mostrar todos los documentos (getDOCS)
        // va adentro de use effecta para que se actualice solo
        const getRecetas = async()=>{
            const data = await getDocs(recetasCollection)
            setRecetas (
                data.docs.map((doc)=>({
                    ...doc.data(), id:doc.id
                }))
            )
        }
        getRecetas()
    },[recetas])

    return (
        <>
            <div className="container">
                <div className="col">
                    <div className="row">
                        <div className="d-grid gap-2">
                        <Link to="create" className="btn btn-secondary mt-2 mb-2">
                            {" "}
                            <i className="fa-solid fa-plus"></i>
                            {" "}
                        </Link>
                        </div>

                        <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <td>Nombre</td>
                                <td>Categoria</td>
                                <td>Dificultad</td>
                                <td>Tiempo Preparacion</td>
                                <td>Ingredientes</td>
                                <td>Instrucciones</td>
                                <td>imagen</td>
                                <td>Acciones</td>
                            </tr>
                        </thead>

                        <tbody>
                            {recetas.map((receta) => (
                            <tr key={receta.id}>
                                <td>{receta.nombre}</td>
                                <td>{receta.categoria}</td>
                                <td>{receta.dificultad}</td>
                                <td>{receta.tiempo_preparacion}</td>
                                <td>{receta.ingredientes}</td>
                                <td>{receta.instrucciones}</td>
                                <td>{receta.imagen}</td>
                                <td>
                                <Link to={`detail/${receta.id}`} className="btn btn-light">
                                    <i className="fa-solid fa-eye"></i>
                                </Link>
                                <Link to={`edit/${receta.id}`} className="btn btn-light">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => confirmDelete(receta.id)}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                                
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}