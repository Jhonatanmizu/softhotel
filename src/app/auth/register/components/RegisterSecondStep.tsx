import React from "react";
import { useFormik } from "formik";
// Types
import { IRegisterSecondStepData } from "../types";
// Components
import { Button, FormControlInput } from "@/app/common";
// Schemas
import { registerSchemaSecondStep } from "../schema";
// Helpers
import { formatter } from "../../../common/helpers";

interface Props {
  submitForm: (values: IRegisterSecondStepData) => void;
  handleGoBack: () => void;
}

const initialValues: IRegisterSecondStepData = {
  publicPlace: "",
  address: "",
  bio: "",
  complement: "",
  contact: "",
  neighborhood: "",
  number: "",
  zipCode: "",
  photoUrl: "",
};

const RegisterSecondStep = ({ submitForm, handleGoBack }: Props) => {
  const form = useFormik({
    initialValues,
    validationSchema: registerSchemaSecondStep,
    onSubmit(values, formikHelpers) {
      submitForm(values);
    },
  });

  const { handleChange, handleBlur, handleSubmit } = form;
  const formValues = form.values;
  const formErrors = form.errors;

  return (
    <section className="w-full flex flex-col">
      <form className="w-full h-full flex flex-col">
        <FormControlInput
          label="Número de contato"
          placeholder="Insira seu número de contato"
          onChange={handleChange("contact")}
          maxLength={15}
          onBlur={handleBlur("contact")}
          value={formatter.formatPhoneNumber(formValues.contact)}
          required
          errorMessage={formErrors.contact}
        />
        <FormControlInput
          label="CEP"
          maxLength={9}
          placeholder="Insira seu CEP"
          onChange={handleChange("zipCode")}
          onBlur={handleBlur("zipCode")}
          value={formatter.formatStringToCep(formValues.zipCode)}
          required
          errorMessage={formErrors.zipCode}
        />
        <FormControlInput
          label="Endereço"
          placeholder="Insira seu   endereço"
          onChange={handleChange("address")}
          onBlur={handleBlur("address")}
          value={formValues.address}
          required
          errorMessage={formErrors.address}
        />
        <FormControlInput
          label="Logradouro"
          placeholder="Insira seu logradouro"
          onChange={handleChange("neighborhood")}
          onBlur={handleBlur("neighborhood")}
          value={formValues.neighborhood}
          required
          errorMessage={formErrors.neighborhood}
        />
        <FormControlInput
          label="Bairro"
          placeholder="Insira seu bairro"
          onChange={handleChange("publicPlace")}
          onBlur={handleBlur("publicPlace")}
          value={formValues.publicPlace}
          required
          errorMessage={formErrors.publicPlace}
        />
        <FormControlInput
          label="Número do endereço"
          placeholder="Insira seu   número"
          onChange={handleChange("number")}
          onBlur={handleBlur("number")}
          value={formValues.number}
          required
          type="number"
          errorMessage={formErrors.number}
        />
        <FormControlInput
          label="Complemento"
          placeholder="Insira o complemento"
          onChange={handleChange("complement")}
          onBlur={handleBlur("complement")}
          value={formValues.complement}
          errorMessage={formErrors.complement}
        />
        <Button type="submit" text="Prosseguir" handleClick={handleSubmit} />
        <Button
          type="submit"
          text="Voltar"
          variant="outline"
          handleClick={handleGoBack}
        />
      </form>
    </section>
  );
};

export default RegisterSecondStep;
