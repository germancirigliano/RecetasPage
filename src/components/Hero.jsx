import { Link } from "react-router-dom"
import './../css/hero.css'

export const Hero = () => {
    return(
        <section className="hero">

            <article className="hero__content container">
                <h3 className="hero__title">Nuevos Recetas cada Semana</h3>
                <p className="hero__text">Ingresa y comparte tu propia receta</p>
                <Link className="d-flex justify-content-end" to="/recetas">
                    <button className="btn btn-primary" type='button'>RECETAS</button>
                </Link>
            </article>
        </section>
)
}
