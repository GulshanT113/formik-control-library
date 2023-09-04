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
    address: "",
    phoneNo: "",
    selectOptions: "",
    radioOption: "",
    checkbox: [],
  };

  // const validationSchema = Yup.object({
  //   name: Yup.string().required("Required"),
  //   email: Yup.string().email("invalid format").required("Required"),
  //   address: Yup.string().required("Required"),
  //   phoneNo: Yup.number().required("Required"),
  //   radioOption: Yup.string().required("Required"),
  //   selectOptions: Yup.string().required("Required"),
  //   checkBox: Yup.array().required("Required"),
  // });
  const onSubmit = (values) => {
    console.log("registration form data ", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            {formData.map((data) => (
              <>
                <FormikControl
                  control={formData.type}
                  name={formData.name}
                  label={formData.label}
                  options={formData.options}
                />
                <ButtonController />
              </>
            ))}
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
