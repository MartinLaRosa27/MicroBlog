import { useUserContext } from "../../context/UserContext";
import { useState } from "react";

interface Props {
  setShowIniciar: any;
}

function Iniciar({ setShowIniciar }: Props) {
  const { autenticacionUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await autenticacionUser({ email, password });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group" style={{ margin: "25px 0" }}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="btn-cont">
          <button type="submit">Iniciar sesión</button>
          <small onClick={() => setShowIniciar(false)}>Registrarse</small>
        </div>
      </form>
    </div>
  );
}

export default Iniciar;
