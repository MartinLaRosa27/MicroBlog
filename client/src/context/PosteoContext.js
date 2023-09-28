import { createContext, useContext } from "react";
import axios from "axios";
const Context = createContext();

export const PosteoContext = ({ children }) => {
  const todosPosteos = async () => {
    let values = [];
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/todos-posteos`)
      .then((res) => {
        values = res.data.posteos;
      })
      .catch((e) => {
        console.log(e);
      });
    return values;
  };

  return (
    <Context.Provider value={{ todosPosteos }}>{children}</Context.Provider>
  );
};

export const usePosteoContext = () => {
  return useContext(Context);
};
