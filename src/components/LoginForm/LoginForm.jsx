import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import * as Yup from "yup";
import { useId } from "react";
import { toast, Toaster } from "react-hot-toast";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email format").required("The field is required"),
  password: Yup.string()
    .min(7, "Too short!")
    .max(50, "Too long!")
    .required("The field is required"),
});

export default function LoginForm() {
  const fieldID = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {})
      .catch((error) => {
        toast.error("Login failed. Check your email address or password");
        console.log(error);
      });
    actions.resetForm();
  };

  return (
    <>
      <Toaster />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <label htmlFor={`${fieldID}-email`}>
            Email
            <Field
              className={css.input}
              type="email"
              name="email"
              id={`${fieldID}-email`}
            />
            <ErrorMessage
              className={css.error}
              name="email"
              component="div"
            />
          </label>

          <label htmlFor={`${fieldID}-password`}>
            Password
            <Field
              className={css.input}
              type="password"
              name="password"
              id={`${fieldID}-password`}
            />
            <ErrorMessage
              className={css.error}
              name="password"
              component="div"
            />
          </label>

          <button className={css.button} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </>
  );
}
