import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email é obrigatório")
    .email("Este email é inválido"),
  password: Yup.string().required("Senha é obrigatória"),
});

export default loginSchema;
