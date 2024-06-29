import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const fieldID = useId();

  const dispatch = useDispatch();

  const validationControl = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("The field is required"),
    email: Yup.string().email("Email format").required("The field is required"),
    password: Yup.string()
      .min(7, "Too short!")
      .max(50, "Too long!")
      .required("The field is required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Your registration is successful!");
      })
      .catch((error) => {
        toast.error(
          "Registration failed. Probably, your email address has already been registered"
        );
        console.log(error);
      });
    actions.resetForm();
  };

  return (
    <>
    <Toaster/>
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationControl}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.container}>
          <label className={css.input} htmlFor={`${fieldID}-name`}>
            Username
            <Field
              type="text"
              name="name"
              className={css.field}
              id={`${fieldID}-name`}
            />
            <ErrorMessage className={css.error} name="name" component="div" />
          </label>
          <label className={css.input} htmlFor={`${fieldID}-email`}>
            Email
            <Field
              type="email"
              name="email"
              className={css.field}
              id={`${fieldID}-email`}
            />
            <ErrorMessage className={css.error} name="email" component="div" />
          </label>
          <label className={css.input} htmlFor={`${fieldID}-password`}>
            Password
            <Field
              type="password"
              name="password"
              className={css.field}
              id={`${fieldID}-password`}
            />
            <ErrorMessage
              className={css.error}
              name="password"
              component="div"
            />
          </label>
          <button type="submit" className={css.button}>
            Register
          </button>
        </div>
      </Form>
    </Formik>
    </>
  );
}