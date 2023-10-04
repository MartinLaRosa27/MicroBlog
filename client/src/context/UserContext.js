import { createContext, useContext } from "react";
import axios from "axios";
const Context = createContext();

export const UserContext = ({ children }) => {
  const guardarUser = async (values) => {
    let result = false;
    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/guardar-user`, values)
      .then((res) => {
        if (res.data.result == "success") {
          result = true;
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return result;
  };

  const autenticacionUser = async (values) => {
    let token = false;
    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/autenticacion-user`, values)
      .then((res) => {
        if (res.data.result == "success") {
          token = res.data.token;
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return token;
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
