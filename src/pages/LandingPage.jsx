import { RecetasGrid } from "../components/RecetasGrid"
import { Filters } from "../components/Filters"
import "../css/LandingPage.css"
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { RecetasNuevas } from "../components/RecetasNuevas"

export const LandingPage = () => {
    return(
        <>
            <Navbar/>
            <Hero/>  
            <div className="container recetas">
                <Filters/>
                <RecetasGrid/> 
            </div>
            <Footer/>
        </>
    )
}