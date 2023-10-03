import { createContext, useContext } from "react";
import axios from "axios";
const Context = createContext();

export const UserContext = ({ children }) => {
  const guardarUser = async (values) => {
    let result = false;
    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/guardar-user`, values)
      .then((res) => {
        result = true;
      })
      .catch((e) => {
        console.log(e);
      });
    return result;
  };

  return (
    <Context.Provider value={{ guardarUser }}>{children}</Context.Provider>
  );
};

export const useUserContext = () => {
  return useContext(Context);
};
