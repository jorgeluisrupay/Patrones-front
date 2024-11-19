import "../styles/styles.module.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MySelect, MyTextInput, MyCheckbox } from "../components";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe tener 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("El correo no tiene el formato valido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .required("Requerido")
            .notOneOf(["it-jr"], "Esta opcion no es requerida"),
        })}
      >
        {(formik) => (
          <Form noValidate>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Nombre"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Apellido"
              type="email"
            />
            <MyTextInput label="Email" name="email" placeholder="Email" />

            <MySelect name="jobType" label="Job Type" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </MySelect>

            <MyCheckbox label="Terminos" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
