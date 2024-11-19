import { FormEvent } from "react";
import "../styles/styles.module.css";
import { useForm } from "../hooks/useForm";
export const RegisterPage = () => {
  const {
    formData,
    onChange,
    resetForm,
    email,
    name,
    password1,
    password2,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>RegisterPage</h1>

      <form noValidate onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(ev) => onChange(ev)}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />

        {!isValidEmail(email) && <span>Email no es valido</span>}

        <input
          type="password"
          placeholder="Password"
          value={password1}
          name="password1"
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contrasena tiene que tener 6 letras</span>
        )}
        <input
          type="password"
          placeholder="Repeat Password"
          value={password2}
          name="password2"
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Las contrasenas deben ser iguales</span>
        )}
        <button type="submit">Enviar</button>
        <button onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
};
