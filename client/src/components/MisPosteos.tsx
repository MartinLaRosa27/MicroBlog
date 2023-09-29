import { useEffect, useState } from "react";
import { usePosteoContext } from "../context/PosteoContext";
import { dateFormat } from "../helpers/dateFormat";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function MisPosteos() {
  const { todosPosteos, eliminarPosteo } = usePosteoContext();
  const [posteos, setPosteos] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!loader) {
      callTodosPosteos();
    }
  }, [loader]);

  const callTodosPosteos = async () => {
    setLoader(true);
    const result = await todosPosteos();
    setPosteos(result);
  };

  const handleClickDelete = (id: any) => {
    if (window.confirm("¿Estás seguro que deseas eliminar el posteo?")) {
      if (eliminarPosteo(id)) {
        alert("Posteo eliminado correctamente");
        setLoader(false);
      }
    }
  };

  return (
    <section style={{ minHeight: "100vh" }}>
      {posteos.length > 0 ? (
        <>
          {posteos.map((posteo: any, i: number) => {
            return (
              <article className="entry" key={i}>
                <div className="cont-titulo">
                  <h2 className="entry__title">
                    {posteo.titulo}{" "}
                    <span className="delete__btn">
                      <AiFillDelete
                        onClick={() => handleClickDelete(posteo.id)}
                      />
                    </span>{" "}
                    <span className="edit__btn">
                      <AiFillEdit />
                    </span>
                  </h2>
                  <time className="entry__date">
                    • {dateFormat(posteo.updated_at)}
                  </time>
                </div>
                <p className="entry__content">{posteo.contenido}</p>
              </article>
            );
          })}
        </>
      ) : (
        <h3 className="sin__posteo">No se encuentran posteos registrados</h3>
      )}
    </section>
  );
}

export default MisPosteos;
