import { RecetasGrid } from "../components/RecetasGrid"
import { Filters } from "../components/Filters"
import "../css/Recetas.css"
import { Footer } from "../components/Footer";

export const Recetas = () => {
    return(
        <> 
            <div className="container recetas">
                <Filters/>
                <RecetasGrid/> 
            </div>
            <Footer/>
        </>
    )
}