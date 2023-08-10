import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "../wiring/FormikControl";
import ButtonController from "../components/ButtonController";

const RegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    address: "",
    phoneNo: "",
    selectOptions: "",
    radioOption: "",
    checkBox: [],
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("invalid format").required("Required"),
    address: Yup.string().required("Required"),
    phoneNo: Yup.number().required("Required"),
    radioOption: Yup.string().required("Required"),
    selectOptions: Yup.string().required("Required"),
    checkBox: Yup.array().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("registration form data ", values);
  };

  const radioOptions = [
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
  ];

  const dropDownOptions = [
    { key: "Select An Option" },
    { key: "Student", value: "student" },
    { key: "Employee", value: "employee" },
    { key: "Self Epmloyee", value: "self employee" },
  ];

  const checkBoxOption = [
    {
      key: "All Information Are Currect !",
      value: "check box checked",
    },
  ];
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl control="input" name="name" label="Full Name " />
            <FormikControl control="input" name="email" label="Email " />
            <FormikControl control="input" name="address" label="Address " />
            <FormikControl control="input" name="phoneNo" label="Contact No " />
            <FormikControl
              control="select"
              name="selectOptions"
              label="Select "
              options={dropDownOptions}
            />
            <FormikControl
              control="radio"
              name="radioOption"
              label="Gender "
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              name="checkBox"
              label="Check Box "
              options={checkBoxOption}
            />
            <ButtonController />
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
