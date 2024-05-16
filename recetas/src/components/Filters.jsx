import { useState, useEffect } from "react"
import {useNavigate,  useLocation} from "react-router-dom"
import {updateURLParams, fetchCategorias, fetchTiempos} from "../js/Filters.js"
import "../css/Filters.css"

export const Filters = ({ onFiltrosChange })=>{
    const navigate = useNavigate();
    const location = useLocation();
    const [filtros, setFiltros] = useState({
        searh:"",
        time: "default",
        difficulty: "default",
        category: "defualt",
    })
    
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const filtrosURL = {};
        for (const [filtro, valor] of searchParams.entries()) {
            filtrosURL[filtro] = valor;
        }
        setFiltros(filtrosURL);
    }, [location.search]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedFilters = {
            ...filtros,
            [name]: value
        };
        setFiltros(updatedFilters);
        const searchParams = updateURLParams(location, updatedFilters);
        navigate(`/?${searchParams.toString()}`);
    };
    

    const [categoriaOptions, setCategoriaOptions] = useState([]);
    useEffect(() => {
        fetchCategorias(setCategoriaOptions);
    }, []);
    const [tiempoOptions, setTiempoOptions] = useState([]);
    useEffect(() => {
        fetchTiempos(setTiempoOptions);
    }, []);
    return(
        <aside className="recetas__filters filters">
            <div className="filters__search">
                <label className="filters__title">Buscar</label>
                <input type="text" name="search" id="search" value={filtros.search || ""} onChange={handleFilterChange} placeholder=""/>
            </div>
            <div className="filters__time">
                <label className="filters__title" >Tiempo de Preparación</label>
                <select name="time" id="time" value={filtros.time || "default"} onChange={handleFilterChange}>
                    <option value="default">Seleccionar</option>
                    {tiempoOptions.map(tiempo => (
                        <option key={tiempo} value={tiempo}>{tiempo}</option>
                    ))}
                </select>
            </div>
            <div className="filters__difficulty">
                <label className="filters__title">Dificultad</label>
                <select name="difficulty" id="difficulty" value={filtros.difficulty || "default"} onChange={handleFilterChange}>
                    <option value="default">Seleccionar</option>
                    <option value="Fácil">Fácil</option>
                    <option value="Media">Media</option>
                    <option value="Dificil">Dificil</option>
                </select>
            </div>
            <div className="filters__category">
                <label className="filters__title">Categoría</label>
                <select name="category" id="category" value={filtros.category || "default"} onChange={handleFilterChange}>
                    <option value="default">Seleccionar</option>
                    {categoriaOptions.map(categoria => (
                        <option key={categoria} value={categoria}>{categoria}</option>
                    ))}
                </select>
            </div>
        </aside>
    )
}