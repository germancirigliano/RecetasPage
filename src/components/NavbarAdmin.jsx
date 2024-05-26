import { Link } from "react-router-dom"
import './../css/navbar.css'
import logo from './../assets/logo60.png'

export const NavbarAdmin = () => {
    return(   
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  <img src={logo}  alt="logo" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                    HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                      ADMIN
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                    RESGISTRESE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                    LOGOUT
                </Link>
              </li>
            </ul>
        
          </div>
        </div>
      </nav>
      
    )
}

