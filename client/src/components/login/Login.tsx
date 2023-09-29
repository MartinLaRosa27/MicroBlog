import { useState } from "react";
import Iniciar from "./Iniciar";
import Registrarse from "./Registrarse";

function Login() {
  const [showIniciar, setShowIniciar] = useState(false);

  return (
    <div className="login">
      <h1>Bienvenido a MicroBlog</h1>

      {showIniciar ? (
        <Iniciar setShowIniciar={setShowIniciar} />
      ) : (
        <Registrarse setShowIniciar={setShowIniciar} />
      )}
    </div>
  );
}

export default Login;
