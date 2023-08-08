import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../wiring/FormikControl";
import ButtonController from "../components/ButtonController";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("invalid format").required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("form data ==> ", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl control="input" name="email" label="Email" />
            <FormikControl
              control="input"
              type="password"
              name="password"
              label="Password"
            />
            <FormikControl control="date" name="date" label="Date" />
            <ButtonController />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginPage;
