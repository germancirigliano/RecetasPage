import { RecetasGrid } from "../components/RecetasGrid"
import { Filters } from "../components/Filters"
import "../css/LandingPage.css"

export const LandingPage = () => {
    
    return(
        <div className="container recetas">
            <Filters/>
            <RecetasGrid/>
        </div>
    )
}