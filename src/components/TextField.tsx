import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Field, useField } from "formik";
type TextFieldProps = {
  name: string;
  label: string;
  type?: "InputType";
  className?: string;
};
const TextField = ({ label, ...props }: TextFieldProps) => {
  const [field, meta] = useField(props);
  return (
    <FormControl
      isInvalid={Boolean(meta.touched && meta.error)}
      className="text-ct"
    >
      <Input as={Field} {...field} {...props} className="text-field" />
      <FormErrorMessage className="error">{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
