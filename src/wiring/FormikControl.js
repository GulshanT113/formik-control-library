import CheckBox from "../components/CheckBox";
import DatePicker from "../components/DatePicker";
import Input from "../components/Input";
import Radio from "../components/Radio";
import SelectDropDown from "../components/SelectDropDown";
import TextArea from "../components/TextArea";

const FormikControl = (props) => {
  console.log("form control ", props);
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <SelectDropDown {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "date":
      return <DatePicker {...rest} />;

    default:
      return null;
  }
};

export default FormikControl;
