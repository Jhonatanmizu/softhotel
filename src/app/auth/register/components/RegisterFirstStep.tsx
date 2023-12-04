// "use client";
import React from "react";
import { useFormik } from "formik";
// Schema
import { registerSchemaFirstStep } from "../schema";
// Components
import Link from "next/link";
import { Button, FormControlInput } from "@/app/common";
// Types
import { IRegisterFirstStepData } from "../types";
// Helpers
import { formatter } from "../../../common/helpers";

interface Props {
  submitForm: (values: IRegisterFirstStepData) => void;
}

const initialValues: IRegisterFirstStepData = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  contactIdentity: "",
};

const RegisterFirstStep = ({ submitForm }: Props) => {
  const form = useFormik({
    validationSchema: registerSchemaFirstStep,
    onSubmit: (values, formikHelpers) => {
      submitForm(values);
    },
    initialValues,
  });
  const { handleBlur, handleChange, handleSubmit } = form;
  const formValues = form.values;
  const formErrors = form.errors;

  return (
    <section className="w-full flex flex-col">
      <form className="w-full h-full flex flex-col">
        <FormControlInput
          label="Email"
          placeholder="Seu email"
          onChange={handleChange("email")}
          onBlur={handleBlur("email")}
          value={formValues.email}
          required
          errorMessage={formErrors.email}
        />
        <FormControlInput
          label="Nome"
          placeholder="Insira seu Nome"
          onChange={handleChange("name")}
          onBlur={handleBlur("name")}
          value={formValues.name}
          required
          errorMessage={formErrors.name}
        />
        <FormControlInput
          label="CPF"
          placeholder="Insira seu CPF"
          onChange={handleChange("contactIdentity")}
          maxLength={14}
          onBlur={handleBlur("contactIdentity")}
          value={formatter.formatStringToCpf(formValues.contactIdentity)}
          required
          errorMessage={formErrors.contactIdentity}
        />
        <FormControlInput
          label="Senha"
          placeholder="Insira sua senha"
          onChange={handleChange("password")}
          onBlur={handleBlur("password")}
          value={formValues.password}
          required
          type="password"
          errorMessage={formErrors.password}
        />
        <FormControlInput
          label="Confirme sua senha"
          placeholder="Insira a senha novamente"
          onChange={handleChange("confirmPassword")}
          onBlur={handleBlur("confirmPassword")}
          value={formValues.confirmPassword}
          type="password"
          required
          errorMessage={formErrors.confirmPassword}
        />
        <Button type="submit" text="Prosseguir" handleClick={handleSubmit} />
      </form>
      <Link
        href="/auth/login"
        className="mb-4 cursor-pointer hover:opacity-70 hover:ease-in-out hover:duration-500 underline text-black-alt text-center"
      >
        Já tem uma conta ? Fazer Login
      </Link>
    </section>
  );
};

export default RegisterFirstStep;
