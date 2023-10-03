import { useUserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface Props {
  setShowIniciar: any;
}

function Registrarse({ setShowIniciar }: Props) {
  const history = useHistory();
  const { guardarUser } = useUserContext();

  return (
    <div className="login-container">
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordAux: "",
        }}
        onSubmit={(value) => {
          if (guardarUser(value)) {
            alert("Usuario registrado correctamente");
            history.push("/");
          }
        }}
        validationSchema={Yup.object({
          email: Yup.string().required("El email es requerido."),
          password: Yup.string()
            .required("La contraseña es requerida.")
            .min(8, "La contraseña debe tener más de 8 caracteres.")
            .oneOf(
              [Yup.ref("passwordAux")],
              "Las contraseñas ingresadas no coinciden."
            ),
        })}
      >
        {(formikProps) => (
          <Form className="login-form">
            <h2>Registrarse</h2>
            <div className="form-group">
              <label>Correo Electrónico:</label>
              <Field
                as="input"
                type="email"
                name="email"
                placeholder="Ingresa correo"
              />
            </div>
            <div className="form-group" style={{ margin: "25px 0" }}>
              <label>Contraseña:</label>
              <Field
                as="input"
                type="password"
                name="password"
                placeholder="Ingresa contraseña"
              />
            </div>
            <div className="form-group" style={{ margin: "25px 0" }}>
              <label>Contraseña Nuevamente:</label>
              <Field
                as="input"
                type="password"
                name="passwordAux"
                placeholder="Ingresa contraseña nuevamente"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <ErrorMessage name="email">
                {(msg) => <small className="text-danger">{msg}</small>}
              </ErrorMessage>
              <ErrorMessage name="password">
                {(msg) => <small className="text-danger">{msg}</small>}
              </ErrorMessage>
            </div>

            <div className="btn-cont">
              <button type="submit" disabled={formikProps.isSubmitting}>
                Registrarse
              </button>
              <small onClick={() => setShowIniciar(true)}>Iniciar sesión</small>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Registrarse;
