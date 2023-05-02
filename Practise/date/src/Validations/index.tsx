import * as yup from "yup"

export const formSchema = yup.object({
    name: yup.string().min(3).max(15).required("Please enter your name"),
    email: yup.string().email().required("Please enter your Email :)"),
    password: yup.string().required("Please Enter Password"),
    confirm_password: yup.string().required().oneOf([yup.ref('password')], "Password must match"),
    number: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Enter a valid phone number"
    ),
})