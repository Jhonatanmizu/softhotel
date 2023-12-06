"use client";
import useAuthStore from "@/store/auth/auth.store";
import { PropsWithChildren, useEffect } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  const loadUser = useAuthStore.getState().loadUser;
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return <>{children}</>;
};

export default AuthLayout;
