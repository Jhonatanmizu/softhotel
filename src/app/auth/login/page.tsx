"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
// Components
import { Button, FormControlInput } from "@/app/common";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
// Schema
import loginSchema from "./schema";
// Types
import { ILoginData } from "./types";
// Store
import useAuthStore from "@/store/auth/auth.store";

const initialValues: ILoginData = {
  email: "",
  password: "",
};

const Login = () => {
  const router = useRouter();
  const { isSigned, login, isLoading } = useAuthStore();
  const form = useFormik({
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const { email, password } = values;
      await login(email, password);
    },
    initialValues,
  });
  const { handleChange, handleBlur, handleSubmit } = form;
  const formValues = form.values;
  const formErrors = form.errors;

  if (isSigned) {
    router.push("/");
  }

  return (
    <main className="flex items-center justify-center min-h-screen p-2">
      <ToastContainer />
      <form className="flex flex-1 flex-col justify-center  p-2 max-w-screen-sm sm:shadow-xl rounded-2xl bg-white">
        <div className="w-full h-48 animate-pulse bg-info rounded-xl mb-2" />
        <h1 className="text-black-alt text-2xl mb-2 font-display">
          Bem vindo!
        </h1>
        <FormControlInput
          label="Email"
          value={formValues.email}
          placeholder="Informe seu email"
          onChange={handleChange("email")}
          onBlur={handleBlur("email")}
          errorMessage={formErrors.email}
        />
        <FormControlInput
          label="Senha"
          value={formValues.password}
          placeholder="Informe seu senha"
          onChange={handleChange("password")}
          onBlur={handleBlur("password")}
          errorMessage={formErrors.password}
          type="password"
        />
        <Link
          href="/auth/recovery"
          className="mb-4 cursor-pointer hover:opacity-70 hover:ease-in-out hover:duration-500 underline text-black-alt"
        >
          Esqueceu a senha?
        </Link>
        <Button
          text="Login"
          handleClick={handleSubmit}
          isLoading={isLoading}
          disabled={isLoading}
        />
        <Link
          href="/auth/register"
          className="mb-4 cursor-pointer hover:opacity-70 hover:ease-in-out hover:duration-500 underline text-black-alt text-center"
        >
          Não tem uma conta? Cadastre-se
        </Link>
      </form>
    </main>
  );
};

export default Login;
