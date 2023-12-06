"use client";
import useAuthStore from "@/store/auth/auth.store";
import { useEffect } from "react";
//Components
import HomePage from "./navigation/home";

const Home = () => {
  const loadUser = useAuthStore.getState().loadUser;
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return <HomePage />;
};
export default Home;
