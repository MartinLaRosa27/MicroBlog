import { createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Context = createContext();

export const UserContext = ({ children }) => {
  const history = useHistory();

  const guardarUser = async (values) => {
    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/guardar-user`, values)
      .then((res) => {
        if (res.data.result === "success") {
          alert("Usuario registrado correctamente");
          history.push("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const autenticacionUser = async (values) => {
    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/autenticacion-user`, values)
      .then((res) => {
        if (res.data.result === "success") {
          localStorage.setItem("microBlogToken", res.data.token);
          window.location.reload();
        }
      })
      .catch((e) => {
        console.log(e);
        alert("Las credenciales ingresadas no coinciden");
      });
  };

  return (
    <Context.Provider value={{ guardarUser, autenticacionUser }}>
      {children}
    </Context.Provider>
  );
};

export const useUserContext = () => {
  return useContext(Context);
};
