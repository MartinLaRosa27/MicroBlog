import { useState } from "react";

interface Props {
  setShowIniciar: any;
}

function Registrarse({ setShowIniciar }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Registrarse</h2>
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
          <button type="submit">Registrarse</button>
          <small onClick={() => setShowIniciar(true)}>Iniciar sesión</small>
        </div>
      </form>
    </div>
  );
}

export default Registrarse;
