"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
// Schemas
import recoverySchema from "./schema";
// Components
import { Button, FormControlInput } from "@/app/common";
import Link from "next/link";
import useAuthStore from "@/store/auth/auth.store";
import { ToastContainer, toast } from "react-toastify";

const initialValues = {
  email: "",
};

const Recovery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recoveryEmailSended, setRecoveryEmailSended] = useState(false);
  const { recovery } = useAuthStore();
  const form = useFormik({
    validationSchema: recoverySchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const { email } = values;
        await recovery(email);
        toast("O email de recuperação foi enviado com sucesso!");
        setRecoveryEmailSended(true);
      } catch (error) {
        console.error("Error when we tried to recovery the password", error);
      } finally {
        setIsLoading(false);
      }
    },
    initialValues,
  });
  const { handleChange, handleBlur, handleSubmit } = form;
  const formValues = form.values;
  const formErrors = form.errors;
  return (
    <main className="flex items-center justify-center min-h-screen p-2">
      <ToastContainer />
      <form className="flex flex-1 flex-col justify-center  p-2 max-w-screen-sm sm:shadow-xl rounded-2xl bg-white">
        <h1 className="text-black-alt text-2xl mb-2 font-display">
          Recuperação de senha
        </h1>
        {recoveryEmailSended ? (
          <p className="text-black-alt text-xl mb-2 font-display">
            O email contendo as intruções foi enviado com sucesso!
          </p>
        ) : (
          <p className="text-black-alt text-xl mb-2 font-display">
            Um email será enviado para você contendo as instruções necessárias
            para redefinir a senha.
          </p>
        )}

        {!recoveryEmailSended && (
          <>
            <FormControlInput
              label="Email"
              value={formValues.email}
              placeholder="Informe seu email"
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              errorMessage={formErrors.email}
            />
            <Button
              text="Recuperar"
              handleClick={handleSubmit}
              disabled={!form.isValid || isLoading}
              isLoading={isLoading}
            />
          </>
        )}
        <Link
          href="/auth/login"
          className="mb-4 cursor-pointer hover:opacity-70 hover:ease-in-out hover:duration-500 underline text-black-alt text-center"
        >
          Voltar para login
        </Link>
      </form>
    </main>
  );
};

export default Recovery;
