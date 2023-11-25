"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
// Components
import { FormControlInput } from "@/app/common";
// Schema
import loginSchema from "./schema";
import { LoginData } from "./types";

const initialValues: LoginData = {
  email: "",
  password: "",
};

const Login = () => {
  const form = useFormik({
    validationSchema: loginSchema,
    onSubmit: () => {},
    initialValues,
  });

  const { handleChange, handleBlur, handleReset, handleSubmit } = form;
  const formValues = form.values;
  const formErrors = form.errors;
  const formTouched = form.touched;

  return (
    <main className="bg-white min-h-screen p-2">
      <h1 className="text-primary">Login</h1>
      <FormControlInput
        label="Email"
        value={form.values.email}
        placeholder="Informe seu email"
        onChange={handleChange("email")}
        onBlur={handleBlur("email")}
        errorMessage={formErrors.email}
      />
    </main>
  );
};

export default Login;
