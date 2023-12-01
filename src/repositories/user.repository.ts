import { db } from "@/config/firebase";
import { collection } from "firebase/firestore";

const userRef = collection(db, "users");
class UserRepo {}
