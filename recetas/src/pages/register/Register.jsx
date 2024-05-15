import { useState } from "react"
import "./register.css"
import {auth} from '../../firebaseConfig/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom"

//SIN TERMINAR

export const Register = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate()


  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navitage("/admin")
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="login">
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
        <button type="submit">Acceder</button>
        {error && <span>Email o contraseña incorrectos!</span>}
      </form>
    </div>
  );
};