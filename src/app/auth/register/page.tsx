"use client";
import React, { useState } from "react";
// Types
import { IRegisterData } from "./types";
// Components
import RegisterFirstStep from "./components/RegisterFirstStep";
import { ProgressCircle } from "@/app/common";
// Services
import authService from "@/services/auth.service";
// Repositories
import userRepo from "@/repositories/user.repository";

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
  number: null,
  photoUrl: "",
  zipCode: "",
};

const Register = () => {
  const [currentStep, setCurrentStep] = useState<"first" | "second">("first");
  const [formValues, setFormValues] = useState<IRegisterData>(initialValues);

  const handleRegister = async () => {
    try {
      const { email, password } = formValues;
      const user = await authService.registerWithEmailAndPassword(
        email,
        password
      );
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
      } = formValues;
      await userRepo.createUser(user, {
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
      });
    } catch (error) {
      console.error("Error when we tried to register user", error);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen p-2 ">
      <section className="w-full bg-white p-2 max-w-screen-sm sm:shadow-xl rounded-2xl">
        <ProgressCircle />
        <h1 className="text-black-alt text-2xl mb-2 font-display">
          Cadastre-se
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
        {currentStep === "second" && <></>}
      </section>
    </main>
  );
};

export default Register;
