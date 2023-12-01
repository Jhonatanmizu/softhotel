import React from "react";
import { useFormik } from "formik";
// Schema
import { registerSchemaFirstStep } from "../schema";
// Types
import { IRegisterFirstStepData } from "../types";
import { Button, FormControlInput } from "@/app/common";

const initialValues: IRegisterFirstStepData = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  cpf: "",
};

const RegisterFirstStep = () => {
  const form = useFormik({
    validationSchema: registerSchemaFirstStep,
    onSubmit: () => {},
    initialValues,
  });
  return (
    <section className="w-full flex flex-col">
      <FormControlInput label="Email" />
      <FormControlInput label="Nome" />
      <FormControlInput label="CPF" />
      <FormControlInput label="Senha" />
      <FormControlInput label="Confirme sua senha" />
      <Button text="Prosseguir" handleClick={() => {}} />
    </section>
  );
};

export default RegisterFirstStep;
