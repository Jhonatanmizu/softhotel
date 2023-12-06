"use client";
import { NextUIProvider } from "@nextui-org/react";
import useAuthStore from "@/store/auth/auth.store";
import { useEffect } from "react";
//Components
import HomePage from "./navigation/home";

const Home = () => {
  const loadUser = useAuthStore.getState().loadUser;
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <NextUIProvider>
      <HomePage />
    </NextUIProvider>
  );
};
export default Home;
