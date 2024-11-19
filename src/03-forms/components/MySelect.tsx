import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any; // con esto puedo pasar cualquier argumento de props
}

export const MySelect = ({ label, ...props }: Props) => {
  // const [field, meta] = useField(props);
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}> {label} </label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" className="span-error" />
      {/* {meta.touched && meta.error && (
        <span className="error"> {meta.error} </span>
      )} */}
    </>
  );
};
