import * as Yup from "yup";

const registerSchemaFirstStep = Yup.object().shape({
  email: Yup.string()
    .required("Email é obrigatório")
    .email("Este email é inválido"),
  password: Yup.string()
    .required("Senha é obrigatória")
    .min(6, "Dever ser mais de 6 caracteres"),
  confirmPassword: Yup.string()
    .required("Senha é obrigatória")
    .min(6, "Dever ser mais de 6 caracteres")
    .test(function (value) {
      if (this.parent.password !== value) {
        return this.createError({ message: "As senhas não conferem" });
      }
      return true;
    }),
  name: Yup.string().required("É necessário informar o seu nome"),
  contactIdentity: Yup.string().required("É necessário informar o seu CPF"),
});

const registerSchemaSecondStep = Yup.object().shape({
  contact: Yup.string().required("É necessário informar o seu número"),
  bio: Yup.string(),
  address: Yup.string(),
  zipCode: Yup.string().required("É necessário informar o seu código postal"),
  number: Yup.string().required(
    "É necessário informar o número da sua residência"
  ),
  publicPlace: Yup.string().required("É necessário informar o logradouro"),
  complement: Yup.string(),
  neighborhood: Yup.string(),
});

const fullRegisterSchema = registerSchemaFirstStep.concat(
  registerSchemaSecondStep
);

export {
  registerSchemaFirstStep,
  registerSchemaSecondStep,
  fullRegisterSchema,
};
