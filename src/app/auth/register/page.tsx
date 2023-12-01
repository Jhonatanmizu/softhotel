"use client";
import React from "react";
import { useFormik } from "formik";
// Schema
import { fullRegisterSchema } from "./schema";
// Types
import { IRegisterData } from "./types";
// Components
import RegisterFirstStep from "./components/RegisterFirstStep";
import { ProgressCircle } from "@/app/common";

const initialValues: IRegisterData = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  cpf: "",
  phoneNumber: "",
  bio: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  birthDate: "",
  addressNumber: null,
};

const Register = () => {
  const form = useFormik({
    validationSchema: fullRegisterSchema,
    onSubmit(values, formikHelpers) {},
    initialValues,
  });
  return (
    <main className="flex items-center justify-center min-h-screen p-2 ">
      <section className="w-full ">
        <ProgressCircle />
        <h1 className="text-black-alt text-2xl mb-2 font-display">
          Cadastre-se
        </h1>
        <RegisterFirstStep />
      </section>
    </main>
  );
};

export default Register;
