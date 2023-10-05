import { createContext, useContext } from "react";
import axios from "axios";
const Context = createContext();

export const PosteoContext = ({ children }) => {
  const todosPosteos = async () => {
    let result = [];
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/todos-posteos`)
      .then((res) => {
        if (res.data.result === "success") {
          result = res.data.posteos;
        }
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
        if (res.data.result === "success") {
          result = true;
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return result;
  };

  const eliminarPosteo = async (id) => {
    let result = false;
    await axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/eliminar-posteo/${id}`)
      .then((res) => {
        if (res.data.result === "success") {
          result = true;
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return result;
  };

  const editarPosteo = async (id, values) => {
    let result = false;
    await axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/editar-posteo/${id}`, values)
      .then((res) => {
        if (res.data.result === "success") {
          result = true;
        }
      })
      .catch((e) => {
        console.log(e);
      });
    return result;
  };

  return (
    <Context.Provider
      value={{ todosPosteos, guardarPosteo, eliminarPosteo, editarPosteo }}
    >
      {children}
    </Context.Provider>
  );
};

export const usePosteoContext = () => {
  return useContext(Context);
};
