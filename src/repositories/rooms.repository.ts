//Firebase
import { doc, setDoc, collection, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase";

//DTOs
import { createRoomDTO, updateRoomDTO } from "../dtos/rooms.dto";

//Collection Reference
const roomCollectionRef = collection(db, "rooms");

//Room update target ID
interface TargetRoom {
  uid: string;
}

//Current hotel ID
interface currentHotel {
  uid: string;
}

class RoomRepo {
  async createRoom(roomData: createRoomDTO, currentHotel: currentHotel) {
    const {
      title,
      description,
      evaluation,
      number,
      cover,
      photos,
      daily_price,
    } = roomData;

    const docData = {
      title: title,
      description: description || "",
      evaluation: evaluation || "",
      number: number,
      cover: cover || "",
      photos: photos || [],
      isAvaliable: true,
      daily_price: daily_price,
    };

    const documentId = currentHotel.uid + title + number;

    const roomDocRef = doc(roomCollectionRef, documentId);
    const roomSnapshot = await getDoc(roomDocRef);
    const exists = roomSnapshot.exists();

    if (exists) {
      console.warn("This room already exists");
      return roomDocRef;
    }

    try {
      await setDoc(roomDocRef, docData);
    } catch (error) {
      console.warn("New room creation has failed... Please try again later.");
    }
  }

  async updateRoom(roomData: updateRoomDTO, target: TargetRoom) {
    const {
      title,
      description,
      evaluation,
      number,
      cover,
      photos,
      isAvaliable,
      daily_price,
    } = roomData;

    const docData = {
      title: title,
      description: description,
      evaluation: evaluation,
      number: number,
      cover: cover,
      photos: photos,
      isAvaliable: isAvaliable,
      daily_price: daily_price,
    };

    const roomDocRef = doc(roomCollectionRef, target.uid);
    const roomSnapshot = await getDoc(roomDocRef);
    const exists = roomSnapshot.exists();

    if (!exists) {
      console.warn("This room does not exists");
      return roomDocRef;
    }

    try {
      await updateDoc(roomDocRef, docData);
    } catch (error) {
      console.warn("Room update has failed... Please try again later.");
    }
  }
}

const roomRepo = new RoomRepo();

export default roomRepo;
