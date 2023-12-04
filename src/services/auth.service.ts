import { auth } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  User,
  AuthError,
} from "firebase/auth";

class AuthService {
  public handleFirebaseAuthError(error: AuthError["code"]) {
    let errorMessage = "";

    switch (error) {
      case "auth/invalid-credential":
        errorMessage = "Email ou senha incorretos";
        break;
      case "auth/user-not-found":
        errorMessage = "Usuário não encontrado";
        break;
      case "auth/invalid-email":
        errorMessage = "Email inválido";
        break;
      case "auth/wrong-password":
        errorMessage = "Senha incorreta, tente novamente";
        break;
      case "auth/email-already-in-use":
        errorMessage = "O email já está cadastrado";
        break;
      case "auth/weak-password":
        errorMessage = "Senha fraca, é necessário no mínimo 6 caracteres";
        break;
      default:
        errorMessage = "Ocorreu um erro, tente novamente mais tarde!";
        break;
    }

    return errorMessage;
  }

  public async registerWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<User> {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return result.user;
    } catch (error) {
      console.error("Could not create user", error);
      throw error;
    }
  }

  public async loginWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<User> {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (error) {
      console.error("Error signing in with email and password", error);
      throw error;
    }
  }

  public async recoveryPassword(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error("Error sending password reset email", error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
