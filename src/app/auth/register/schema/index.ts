import * as Yup from "yup";

const registerSchemaFirstStep = Yup.object().shape({
  email: Yup.string()
    .required("Email é obrigatório")
    .email("Este email é inválido"),
  password: Yup.string().required("Senha é obrigatória"),
  confirmPassword: Yup.string()
    .required("Senha é obrigatória")
    .test(function (value) {
      if (this.parent.password !== value) {
        return this.createError({ message: "As senhas não conferem" });
      }
      return true;
    }),
  name: Yup.string().required("É necessário informar o seu nome"),
  cpf: Yup.string().required("É necessário informar o seu CPF"),
});

const registerSchemaSecondStep = Yup.object().shape({
  phoneNumber: Yup.string().required("É necessário informar o seu número"),
  bio: Yup.string(),
  address: Yup.string(),
  city: Yup.string().required("É necessário informar a sua cidade"),
  state: Yup.string().required("É necessário informar o seu estado"),
  zipCode: Yup.string().required("É necessário informar o seu código postal"),
  birthDate: Yup.string().required(
    "É necessário informar a sua data de nascimento"
  ),
  addressNumber: Yup.string().required(
    "É necessário informar o número da sua residência"
  ),
});

const fullRegisterSchema = registerSchemaFirstStep.concat(
  registerSchemaSecondStep
);

export {
  registerSchemaFirstStep,
  registerSchemaSecondStep,
  fullRegisterSchema,
};
