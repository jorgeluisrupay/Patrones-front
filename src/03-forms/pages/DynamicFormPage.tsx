import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredFileds: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input.validation) continue;

  let schema = Yup.string();

  for (const rule of input.validation) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Minimo de ${(rule as any).value || 2} caracteres`
      );
    }
    if (rule.type === "email") {
      schema = schema.email("Este correo no es valido");
    }
    //...Otras reglas
    requiredFileds[input.name] = schema;
  }
}

const validateSchema = Yup.object({
  ...requiredFileds,
});

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>DynamicFormPage</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validateSchema}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, label, name, placeholder, option }) => {
              if (type === "text" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} name={name} label={label}>
                    <option value="">Select an option</option>
                    {option?.map(({ id, name }) => (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              return <span>Type {type} no es soportado </span>;
            })}
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
