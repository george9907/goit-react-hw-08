import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const validationControl = Yup.object().shape({
    email: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(5, "Too short")
      .max(18, "Too long")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.container}>
          <label className={css.input}>
            Username
            <Field type="text" name="name" className={css.field} />
          </label>
          <label className={css.input}>
            Email
            <Field type="email" name="email" className={css.field} />
          </label>
          <label className={css.input}>
            Password
            <Field type="password" name="password" className={css.field} />
          </label>
          <button type="submit" className={css.button}>
            Register
          </button>
        </div>
      </Form>
    </Formik>
  );
}