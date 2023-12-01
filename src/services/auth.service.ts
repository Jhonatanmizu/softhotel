import { auth } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  User,
} from "firebase/auth";

class AuthService {
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
    }
  }
}

const authService = new AuthService();

export default authService;
