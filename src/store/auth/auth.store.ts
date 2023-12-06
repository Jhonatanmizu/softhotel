import { create } from "zustand";
import { toast } from "react-toastify";
// Repositories
import userRepo from "@/repositories/user.repository";
// Service
import storageService from "@/services/storage.service";
import authService from "@/services/auth.service";
// Types
import { createUserDTO, updateUserDTO } from "@/dtos/user.dto";
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
  updateProfile: (userId: string, userDto: updateUserDTO) => Promise<void>;
  user: IUser;
  isSigned: boolean;
  isLoading: boolean;
  error: any | null;
  loadUser: () => void;
}

const initialUserState: IUser = {
  id: "",
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
      storageService.setData("user", userData);
      toast("Login realizado com sucesso!");
      set({ user: userData, isLoading: false, isSigned: true });
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
      storageService.setData("user", createdUser);
      toast("Cadastro realizado com sucesso!");
      setTimeout(() => {
        set({ user: createdUser as IUser, isLoading: false, isSigned: true });
      }, 500);
    } catch (error: any) {
      const errorMessage = authService.handleFirebaseAuthError(error.code);
      console.error("Error creating user", errorMessage);
      toast(errorMessage);
      set({ error });
    }
  },
  recovery: async (email) => {
    return await authService.recoveryPassword(email);
  },
  logout: () => {
    set({ isLoading: true });
    toast("Logout efetuado com sucesso!");
    setTimeout(() => {
      storageService.setData("user", null);
      set({ isSigned: false, user: initialUserState, isLoading: false });
    }, 500);
  },
  loadUser: () => {
    set({ isLoading: true });
    const user = storageService.getData("user");
    console.log("LOADED USER", user);
    if (!user) return set({ isLoading: false });
    set({ user: user as IUser, isLoading: false, isSigned: true });
  },
  updateProfile: async (userId, userDTO) => {
    try {
      set({ isLoading: true });
      await userRepo.updateUser(userId, userDTO);
      const updatedUser = await userRepo.getUserById(userId);
      console.log("Updated USER", updatedUser);
      storageService.setData("user", updatedUser);
      if (!updatedUser) return;
      toast("Perfil atualizado com sucesso!");
      setTimeout(() => {
        set({ user: updatedUser as IUser, isLoading: false });
      }, 500);
    } catch (error) {
      toast("Ocorreu um erro ao tentar atualizar o perfil!");
    }
  },
}));

export default useAuthStore;
