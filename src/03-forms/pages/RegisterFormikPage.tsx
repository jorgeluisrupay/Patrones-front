import "../styles/styles.module.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>RegisterFormikPage</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "El nombre debe ser de 3 caracteres o mas")
            .max(15, "El nombre debe ser menor de 15 caracteres")
            .required("Requerido"),
          email: Yup.string()
            .email("El correo no tiene el formato valido")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Minimo 6 caracteres")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contrasenas no son iguales")
            .min(6, "Minimo 6 caracteres")
            .required("Requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Nombre" name="name" placeholder="Nombre" />
            <MyTextInput
              label="Email"
              name="email"
              placeholder="Correo"
              type="email"
            />
            <MyTextInput
              label="Password"
              name="password1"
              placeholder="******"
            />
            <MyTextInput
              label="Confirmar Password"
              name="password2"
              placeholder="******"
            />
            <button type="submit">Enviar</button>
            <button onClick={handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
