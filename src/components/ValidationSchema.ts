import * as Yup from "yup";

const schema = Yup.object({
  firstName: Yup.string().required("First Name cannot be empty"),
  lastName: Yup.string().required("Last Name cannot be empty"),
  email: Yup.string()
    .email("Looks like this is not an email")
    .required("Email Can't be empty"),
  password: Yup.string()
    .required("Password cannot be empty")
    .min(6, "Password too short!")
    .max(28, "Password too long!"),
});
export default schema;
