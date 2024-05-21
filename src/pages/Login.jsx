import { useContext, useState } from "react"
import {auth} from '../firebaseConfig/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate,Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import "../css/Login.css"

export const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate()

const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN",payload:user})
        navitage("/admin")
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <>
    <div className="login">
      <form onSubmit={handleLogin}>
      <h1>ACCEDER A SU CUENTA</h1>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Acceder</button>
        {error && <span>Email o contraseña incorrectos!</span>}
        <Link to="../register">
          <p>Registrarse</p>
        </Link>
      </form>
    </div>
    </>
  );
};