import { useState } from "react"
import {auth} from '../firebaseConfig/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom"
import "../css/Register.css"

//SIN TERMINAR

export const Register = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate()


  const handleLogin = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navitage("/login")
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="register">
      <h1 >REGISTRAR USUARIO</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};