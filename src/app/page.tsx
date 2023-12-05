"use client";
import useAuthStore from "@/store/auth/auth.store";
//Components
import HomePage from "./navigation/home";

const Home = () => {
  const loadUser = useAuthStore.getState().loadUser;
  loadUser();
  return <HomePage />;
};
export default Home;
