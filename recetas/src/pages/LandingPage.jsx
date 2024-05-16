import { RecetasGrid } from "../components/RecetasGrid"
import { Filters } from "../components/Filters"
import "../css/LandingPage.css"
import { Link } from "react-router-dom"

export const LandingPage = () => {
    
    return(
        <>
            <Link className="d-flex justify-content-end" to="/admin">
                <button className="btn btn-primary" type='button'>ADMIN</button>
            </Link>
            <div className="container recetas">
                <Filters/>
                <RecetasGrid/>
            </div>
        </>
    )
}