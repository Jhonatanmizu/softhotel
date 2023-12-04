import * as Yup from "yup";

const recoverySchema = Yup.object().shape({
  email: Yup.string()
    .required("Email é obrigatório")
    .email("Este email é inválido"),
});

export default recoverySchema;
