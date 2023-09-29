import { createContext, useContext } from "react";
import axios from "axios";
const Context = createContext();

export const PosteoContext = ({ children }) => {
  const todosPosteos = async () => {
    let result = [];
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/todos-posteos`)
      .then((res) => {
        result = res.data.posteos;
      })
      .catch((e) => {
        console.log(e);
      });
    return result;
  };

  const guardarPosteo = async (values) => {
    let result = false;
    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/guardar-posteo`, values)
      .then((res) => {
        alert("Posteo publicado correctamente");
        result = true;
      })
      .catch((e) => {
        console.log(e);
      });
    return result;
  };

  return (
    <Context.Provider value={{ todosPosteos, guardarPosteo }}>
      {children}
    </Context.Provider>
  );
};

export const usePosteoContext = () => {
  return useContext(Context);
};
