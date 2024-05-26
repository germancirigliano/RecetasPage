import './../css/footer.css'
import { Link } from "react-router-dom"
import logo from './../assets/logo.png'

export const Footer = () => {
    return(
      <footer className="footer">
        <nav className="navbar container">
          <ul className="navbar__item">
            <li className="navbar__item">
              <Link className="navbar__link" to="/">
                    HOME
                </Link>
            </li>
            <li>
              <Link className="navbar__link" to="/admin">
                    ADMIN
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" to="/login">
                    LOGIN
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" to="/register">
                    RESGISTRESE
              </Link>
            </li>
          </ul>
          <picture>
            <img
              src={logo}
              alt="Logo de la Empresa"
            />
          </picture>

        </nav>

        <p className="footer__copy">All rights reserved 2024 &copy;</p>
      </footer>

)
}

