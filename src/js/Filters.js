import {collection, getDocs, deleteDoc, doc, query, where} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js";

export const updateURLParams = (location, updatedFilters) => {
    const searchParams = new URLSearchParams(location.search);
    Object.keys(updatedFilters).forEach(filtro => {
        if (updatedFilters[filtro] && updatedFilters[filtro] !== "default") {
            searchParams.set(filtro, updatedFilters[filtro]);
        } else {
            searchParams.delete(filtro);
        }
    });
    return searchParams;
};

export const fetchCategorias = async (setCategoriaOptions) => {
    try {
        const categoriasSnapshot = await getDocs(collection(db, "recetas"));
        const categorias = new Set();
        categoriasSnapshot.forEach(doc => {
            const categoria = doc.data().categoria;
            if (categoria) {
                categorias.add(categoria);
            }
        });
        setCategoriaOptions(Array.from(categorias));
    } catch (error) {
        console.error("Error al obtener las categorías:", error);
    }
};
export const fetchTiempos = async (setTiempoOptions) => {
    try {
        const tiemposSnapshot = await getDocs(collection(db, "recetas"));
        const tiempos = new Set();
        tiemposSnapshot.forEach(doc => {
            const tiempo = doc.data().tiempo_preparacion;
            if (tiempo) {
                tiempos.add(tiempo);
            }
        });
        setTiempoOptions(Array.from(tiempos));
    } catch (error) {
        console.error("Error al obtener los tiempos:", error);
    }
};

const fetchNombresFiltro = async (nombreFiltro)=>{
    const nombresSnapshot = await getDocs(collection(db, "recetas"));
    const nombres = [];
    nombresSnapshot.forEach(doc => {
        const nombre = doc.data().nombre;
        if (nombre.toLowerCase().includes(nombreFiltro.toLowerCase())) {
            nombres.push(nombre);
        }
    });
    return nombres.length===0?[""]:nombres; 
}

export const getQueryFilters = async(location)=>{
    const searchParams = new URLSearchParams(location.search);
    const filtros = {};
    let q = collection(db, "recetas");
    for (const [filtro, valor] of searchParams.entries()) {
        filtros[filtro] = valor;
    }
    if(filtros.search){
        const nombres = await fetchNombresFiltro(filtros.search);
        q = query(q, where("nombre", "in", nombres));
    }
    if(filtros.time){
        q = query(q, where("tiempo_preparacion", "==", filtros.time));
    }
    if(filtros.difficulty){
        q = query(q, where("dificultad", "==", filtros.difficulty));
    }
    if(filtros.category){
        q = query(q, where("categoria", "==", filtros.category));
    }
    return q;
}