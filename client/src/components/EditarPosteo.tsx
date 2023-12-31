import { Formik, Field, Form, ErrorMessage } from "formik";
import { usePosteoContext } from "../context/PosteoContext";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as Yup from "yup";

function EditarPosteo() {
  const history = useHistory();
  const { id }: any = useParams();
  const { editarPosteo } = usePosteoContext();

  return (
    <section style={{ minHeight: "100vh" }}>
      <Formik
        initialValues={{
          contenido: "",
        }}
        onSubmit={(value) => {
          if (editarPosteo(id, value)) {
            alert("Posteo modificado correctamente");
            history.push("/");
          }
        }}
        validationSchema={Yup.object({
          contenido: Yup.string()
            .required("El contenido es requerido.")
            .min(3, "El contenido debe tener más de 3 caracteres."),
          titulo: Yup.string()
            .required("El título es requerido.")
            .min(3, "El título debe tener más de 3 caracteres."),
        })}
      >
        {(formikProps) => (
          <Form className="form" method="POST">
            <p className="form__input">
              <label className="form__label">Título del posteo:</label>
              <Field name="titulo" className="form__input" as="input"></Field>
            </p>

            <p className="form__input">
              <label className="form__label">Contenido del posteo:</label>
              <Field
                name="contenido"
                className="form__textarea"
                as="textarea"
              ></Field>
            </p>

            <ErrorMessage name="titulo">
              {(msg) => <small className="text-danger">{msg}</small>}
            </ErrorMessage>

            <ErrorMessage name="contenido">
              {(msg) => <small className="text-danger">{msg}</small>}
            </ErrorMessage>

            <button
              type="submit"
              className="form__submit"
              disabled={formikProps.isSubmitting}
            >
              MODIFICAR
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default EditarPosteo;
