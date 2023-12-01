import { db } from "@/config/firebase";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { User } from "firebase/auth";
// Types
import { createUserDTO, updateUserDTO } from "@/dtos/user.dto";

const userCollectionRef = collection(db, "users");
class UserRepo {
  public async createUser(userAuth: User, userDto: createUserDTO) {
    const userDocRef = doc(userCollectionRef, userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    const exists = userSnapshot.exists();
    if (exists) return userDocRef;
    const { email } = userAuth;
    const { name, contact, photoUrl, bio, contactIdentity } = userDto;
    const createdAt = new Date();
    const updatedAt = new Date();
    try {
      await setDoc(userDocRef, {
        name,
        email,
        contact,
        photoUrl,
        contactIdentity,
        bio,
        createdAt,
        updatedAt,
      });
      return userDocRef;
    } catch (error) {
      console.error("Error when we tried to create user", error);
    }
  }

  public async updateUser(userAuth: User, userDTO: updateUserDTO) {
    const userDocRef = doc(userCollectionRef, userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    const exists = userSnapshot.exists();
    if (!exists) return console.error(`Could not find user ${userAuth.uid}`);
    try {
      const { name, photoUrl, bio, contact } = userDTO;
      await setDoc(userDocRef, {
        name,
        photoUrl,
        bio,
        contact,
      });
    } catch (error) {
      console.error("Error when we tried to update user", error);
    }
  }
}

const userRepo = new UserRepo();

export default userRepo;
