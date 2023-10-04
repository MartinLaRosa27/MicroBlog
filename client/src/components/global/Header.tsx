import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  const logout = () => {
    localStorage.removeItem("microBlogToken");
    window.location.reload();
  };

  return (
    <header className="navbar">
      <NavLink className="navbar__brand" to={"/"}>
        <img className="navbar__logo" src={logo} alt="MicroBlog" />
        MicroBlog
      </NavLink>
      <ul className="navbar__navigation">
        <li className="navbar__navigation-item">
          <NavLink
            to={"/nuevo-posteo"}
            activeStyle={{ fontWeight: "bold", color: "black" }}
            className="navbar__link"
          >
            Publicar
          </NavLink>
        </li>
        <li className="navbar__navigation-item">
          <p className="navbar__link" onClick={() => logout()}>
            Salir
          </p>
        </li>
      </ul>
    </header>
  );
}

export default Header;
