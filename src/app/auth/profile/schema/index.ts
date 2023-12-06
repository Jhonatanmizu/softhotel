import * as Yup from "yup";

const profileSchema = Yup.object().shape({
  name: Yup.string().required("É necessário informar o seu nome"),
  contact: Yup.string().required("É necessário informar o seu número"),
  bio: Yup.string(),
  address: Yup.object().shape({
    address: Yup.string(),
    zipCode: Yup.string().required("É necessário informar o seu código postal"),
    number: Yup.string().required(
      "É necessário informar o número da sua residência"
    ),
    publicPlace: Yup.string().required("É necessário informar o logradouro"),
    complement: Yup.string(),
    neighborhood: Yup.string(),
  }),
});

export default profileSchema;
