import React from "react";
import { Form, Formik } from "formik";
import FormikControl from "../wiring/FormikControl";
import FromData from "../json-data/form-data.json";
import ButtonController from "../components/ButtonController";

const DynamicForm = () => {
  const formData = FromData.page_sets[0].pages[0].sections[0].components;
  console.log("form data = ", formData);
  //   const initialValues = {
  //     name: "",
  //     email: "",
  //     address: "",
  //     phoneNo: "",
  //     selectOptions: "",
  //     radioOption: "",
  //     checkBox: [],
  //   };
  //   const validationSchema = Yup.object({
  //     name: Yup.string().required("Required"),
  //     email: Yup.string().email("invalid format").required("Required"),
  //     address: Yup.string().required("Required"),
  //     phoneNo: Yup.number().required("Required"),
  //     radioOption: Yup.string().required("Required"),
  //     selectOptions: Yup.string().required("Required"),
  //     checkBox: Yup.array().required("Required"),
  //   });

  const onSubmit = (values) => {
    console.log("registration form data ", values);
  };

  return (
    <Formik
      //   initialValues={initialValues}
      //   validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {/* {(formik) => {
        formData.map((data) => {
          console.log("map data = ", typeof data.type);

          return (
            <Form>
              <FormikControl
                control={data.type}
                name={data.name}
                label={data.label}
              />
            </Form>
          );
        });
      }} */}
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="text"
              name="email"
              label="Email"
            />
            <FormikControl
              control="input"
              type="password"
              name="password"
              label="Password"
            />
            <FormikControl
              control="input"
              type="password"
              name="confirmPassword"
              label="Confirm Password"
            />
            <FormikControl
              control="radio"
              name="modeOfContact"
              label="Mode Of Contact"
              //   options={radioOptions}
            />
            <FormikControl
              control="input"
              type="number"
              name="phoneNo"
              label="Phone No"
            />
            <ButtonController />
          </Form>
        );
      }}
    </Formik>
  );
};

export default DynamicForm;
