"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
// Components
import { Button, FormControlInput } from "@/app/common";
// Schemas
import profileSchema from "./schema";
// DTOs
import { updateUserDTO } from "@/dtos/user.dto";
// Images
import chevronDown from "../../common/images/chevronDown.svg";
import chevronUp from "../../common/images/chevronUp.svg";
import Image from "next/image";
import useAuthStore from "@/store/auth/auth.store";
import userRepo from "@/repositories/user.repository";
import { ToastContainer } from "react-toastify";

const initialValues: updateUserDTO = {
  id: "",
  address: {
    complement: "",
    neighborhood: "",
    number: "",
    zipCode: "",
    address: "",
    publicPlace: "",
  },
  bio: "",
  contact: "",
  photoUrl: "",
  name: "",
};

const Profile = () => {
  const { user, updateProfile, isLoading } = useAuthStore();
  const [showAddress, setShowAddress] = useState(false);
  const form = useFormik({
    validationSchema: profileSchema,
    initialValues: initialValues,
    onSubmit: async (values, formikHelpers) => {
      await updateProfile(user.id, values);
    },
  });
  const { handleBlur, handleChange, handleSubmit } = form;
  const formValues = form.values;
  const formErrors = form.errors;

  useEffect(() => {
    const loadUser = () => {
      form.setValues(user);
    };
    loadUser();
  }, [user.id]);

  return (
    <main className="flex items-start justify-center min-h-screen p-2">
      <ToastContainer />
      <div className="flex flex-1 flex-col justify-center  p-2 sm:shadow-xl rounded-2xl bg-white">
        <h1 className="text-black-alt text-2xl mb-2 font-display">Perfil</h1>
        <FormControlInput
          onChange={handleChange("name")}
          onBlur={handleBlur("name")}
          value={formValues.name}
          label="Nome"
          placeholder="Seu nome"
          errorMessage={formErrors.name}
        />
        <FormControlInput
          onChange={handleChange("contact")}
          onBlur={handleBlur("contact")}
          value={formValues.contact}
          label="Contato"
          placeholder="Seu contato"
          errorMessage={formErrors.contact}
        />
        <FormControlInput
          onChange={handleChange("bio")}
          onBlur={handleBlur("bio")}
          value={formValues.bio}
          label="Bio"
          placeholder="Sua bio"
          errorMessage={formErrors.bio}
        />
        <button
          className="flex items-center gap-2 hover:opacity-70"
          onClick={() => setShowAddress((prevValue) => !prevValue)}
        >
          <h3 className="text-black-alt text-xl mb-2 font-display">Endereço</h3>
          <Image
            width={20}
            height={20}
            alt="Seta para colapsar"
            src={showAddress ? chevronUp : chevronDown}
          />
        </button>
        {showAddress && (
          <>
            <FormControlInput
              onChange={handleChange("address.zipCode")}
              onBlur={handleBlur("address.zipCode")}
              value={formValues.address?.zipCode}
              label="CEP"
              placeholder="Seu CEP"
              errorMessage={formErrors.address?.zipCode}
            />
            <FormControlInput
              onChange={handleChange("address.address")}
              onBlur={handleBlur("address.address")}
              value={formValues.address?.address}
              label="Endereço"
              placeholder="Seu endereço"
              errorMessage={formErrors.address?.address}
            />
            <FormControlInput
              onChange={handleChange("address.neighborhood")}
              onBlur={handleBlur("address.neighborhood")}
              value={formValues.address.neighborhood}
              label="Logradouro"
              placeholder="Seu logradouro"
              errorMessage={formErrors.address?.neighborhood}
            />
            <FormControlInput
              onChange={handleChange("address.publicPlace")}
              onBlur={handleBlur("address.publicPlace")}
              value={formValues.address.publicPlace}
              label="Bairro"
              placeholder="Seu bairro"
              errorMessage={formErrors.address?.publicPlace}
            />
            <FormControlInput
              onChange={handleChange("address.number")}
              onBlur={handleBlur("address.number")}
              value={String(formValues.address.number || "")}
              label="Número"
              placeholder="Número de sua residência"
              errorMessage={formErrors.address?.number}
            />
            <FormControlInput
              onChange={handleChange("address.complement")}
              onBlur={handleBlur("address.complement")}
              value={formValues.address.complement}
              label="Complemento"
              placeholder="O complemento"
              errorMessage={formErrors.address?.complement}
            />
          </>
        )}
        <Button
          text="Atualizar"
          type="submit"
          handleClick={handleSubmit}
          disabled={isLoading}
          isLoading={isLoading}
        />
      </div>
    </main>
  );
};

export default Profile;
