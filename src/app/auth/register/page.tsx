"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// Types
import { IRegisterData } from "./types";
// Components
import RegisterFirstStep from "./components/RegisterFirstStep";
import RegisterSecondStep from "./components/RegisterSecondStep";
import { ToastContainer } from "react-toastify";
import { ProgressCircle } from "@/app/common";
// Stories
import useAuthStore from "@/store/auth/auth.store";
// Types
import { createUserDTO } from "@/dtos/user.dto";

const initialValues: IRegisterData = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  contactIdentity: "",
  contact: "",
  bio: "",
  address: "",
  neighborhood: "",
  publicPlace: "",
  complement: "",
  number: "",
  photoUrl: "",
  zipCode: "",
};

const Register = () => {
  const [currentStep, setCurrentStep] = useState<"first" | "second">("first");
  const [formValues, setFormValues] = useState<IRegisterData>(initialValues);
  const { register } = useAuthStore();

  const handleRegister = async (data: IRegisterData) => {
    const { email, password } = data;
    const {
      name,
      contactIdentity,
      complement,
      bio,
      publicPlace,
      neighborhood,
      zipCode,
      number,
      address,
      contact,
      photoUrl,
    } = data;
    const userDTO: createUserDTO = {
      photoUrl,
      email,
      name,
      contactIdentity,
      bio,
      contact,
      address: {
        complement,
        publicPlace,
        neighborhood,
        zipCode,
        number,
        address,
      },
    };
    register(email, password, userDTO);
  };

  return (
    <main className="flex items-center justify-center min-h-screen p-2 ">
      <ToastContainer />
      <section className="w-full bg-white p-2 max-w-screen-sm sm:shadow-xl rounded-2xl">
        <ProgressCircle currentStep={currentStep} />
        <h1 className="text-black-alt text-2xl mb-2 font-display">
          {currentStep === "first" ? "Cadastre-se" : "Estamos quase lá"}
        </h1>
        {currentStep === "first" && (
          <RegisterFirstStep
            submitForm={(values) => {
              setFormValues((prevValue) => ({
                ...prevValue,
                ...values,
              }));
              setCurrentStep("second");
            }}
          />
        )}
        {currentStep === "second" && (
          <RegisterSecondStep
            submitForm={async (values) => {
              const data = {
                ...formValues,
                ...values,
              };
              await handleRegister(data);
            }}
            handleGoBack={() => setCurrentStep("first")}
          />
        )}
      </section>
    </main>
  );
};

export default Register;
