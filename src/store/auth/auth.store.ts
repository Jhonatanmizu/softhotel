import { create } from "zustand";
// Repositories
import userRepo from "@/repositories/user.repository";
// Service
import authService from "@/services/auth.service";
// Types
import { createUserDTO } from "@/dtos/user.dto";
import { IUser } from "@/types";

interface AuthState {
  login: (email: string, password: string) => void;
  register: (email: string, password: string, userDTO: createUserDTO) => void;
  recovery: (email: string) => void;
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
    } catch (error) {
      console.error("Error when we tried to login", error);
      set({ error });
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
    } catch (error) {
      console.error("Error creating user", error);
      set({ error });
    }
  },
  recovery: (email) => {},
  logout: () => {},
}));

export default useAuthStore;
