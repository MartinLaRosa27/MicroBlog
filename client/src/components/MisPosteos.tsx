import { useEffect, useState } from "react";
import { usePosteoContext } from "../context/PosteoContext";
import { dateFormat } from "../helpers/dateFormat";

function MisPosteos() {
  const { todosPosteos } = usePosteoContext();
  const [posteos, setPosteos] = useState([]);

  useEffect(() => {
    const callTodosPosteos = async () => {
      const result = await todosPosteos();
      setPosteos(result);
    };
    callTodosPosteos();
  }, []);

  return (
    <section style={{ minHeight: "100vh" }}>
      {posteos.map((posteo: any, i: number) => {
        return (
          <article className="entry" key={i}>
            <div className="cont-titulo">
              <h2 className="entry__title">{posteo.titulo}</h2>
              <time className="entry__date">
                • {dateFormat(posteo.updated_at)}
              </time>
            </div>
            <p className="entry__content">{posteo.contenido}</p>
          </article>
        );
      })}
    </section>
  );
}

export default MisPosteos;
