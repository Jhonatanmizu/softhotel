import { create } from "zustand";
import { toast } from "react-toastify";
// Repositories
import userRepo from "@/repositories/user.repository";
// Service
import authService from "@/services/auth.service";
// Types
import { createUserDTO } from "@/dtos/user.dto";
import { IUser } from "@/types";

interface AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    userDTO: createUserDTO
  ) => Promise<void>;
  recovery: (email: string) => Promise<void>;
  logout: () => void;
  user: IUser;
  isSigned: boolean;
  isLoading: boolean;
  error: any | null;
}
const initialUserState: IUser = {
  name: "",
  email: "",
  contact: "",
  contactIdentity: "",
  photoUrl: "",
  bio: "",
  address: {
    publicPlace: "",
    zipCode: "",
    neighborhood: "",
    number: "",
    complement: "",
    address: "",
  },
  createdAt: new Date(),
  updatedAt: new Date(),
};

const useAuthStore = create<AuthState>()((set) => ({
  isSigned: false,
  isLoading: false,
  user: initialUserState,
  error: null,
  login: async (email, password) => {
    try {
      set({ isLoading: true });
      const user = await authService.loginWithEmailAndPassword(email, password);
      const userData = await userRepo.getUserById(user.uid);
      set({ user: userData, isLoading: false, isSigned: true });
      toast("Login realizado com sucesso!");
    } catch (error: any) {
      console.error("Error when we tried to login", error.code);
      const errorMessage = authService.handleFirebaseAuthError(error.code);
      toast(errorMessage);
      set({ error, isLoading: false });
    }
  },
  register: async (email: string, password: string, userDTO: createUserDTO) => {
    try {
      set({ isLoading: true });
      const userAuth = await authService.registerWithEmailAndPassword(
        email,
        password
      );
      const createdUser = await userRepo.createUser(userAuth, userDTO);
      set({ user: createdUser as IUser, isLoading: false, isSigned: true });
    } catch (error: any) {
      console.error("Error creating user", error);
      const errorMessage = authService.handleFirebaseAuthError(error.code);
      toast(errorMessage);
      set({ error });
    }
  },
  recovery: async (email) => {
    return await authService.recoveryPassword(email);
  },
  logout: () => {},
}));

export default useAuthStore;
