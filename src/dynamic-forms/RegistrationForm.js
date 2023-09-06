import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "../wiring/FormikControl";
import ButtonController from "../components/ButtonController";
import FromData from "../json-data/form-data.json";
const RegistrationForm = () => {
  const formData = FromData.page_sets[0].pages[0].sections[0].components;
  const initialValues = {
    name: "",
    email: "",
    password: "",
    number: "",
    address: "",
    select: "",
    radio: "",
    checkbox: [],
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required*"),
    email: Yup.string().email("invalid format").required("Required"),
    password: Yup.string().required("Required"),
    number: Yup.number().required("Required"),
    address: Yup.string().required("Required"),
    radio: Yup.string().required("Required"),
    select: Yup.string().required("Required"),
    checkbox: Yup.array().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("registration form data ", values);
  };
  console.log("dynamic data for json ", formData);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            {formData.map((data) => (
              <>
                <FormikControl
                  control={data.control}
                  type={data.type}
                  name={data.name}
                  label={data.label}
                  options={data.options}
                />
              </>
            ))}
            <ButtonController />
          </Form>
        );
      }}
    </Formik>
  );
};
export default RegistrationForm;
