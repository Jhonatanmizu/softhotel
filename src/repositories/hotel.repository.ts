//Firebase
import { doc, setDoc, collection, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase";

//DTOS
import { createHotelDTO, updateHotelDTO } from "@/dtos/hotel.dto";

//Collection Reference
const hotelCollectionRef = collection(db, "hotels");

//Hotel target target ID
interface TargetHotel {
  uid: string;
}

class HotelRepo {
  async createHotel(userAuth: any, hotelData: createHotelDTO) {
    const {
      title,
      description,
      evaluation,
      number,
      cover,
      photos,
      benefits,
      address,
      plan_id,
    } = hotelData;

    const docData = {
      title: title,
      description: description || "",
      evaluation: evaluation || "",
      number: number || "",
      cover: cover || "",
      photos: photos || [],
      benefits: benefits || [],
      isAvailable: false,
      address: address,
      rooms: [],
      plan_id: plan_id,
    };

    const documentId = userAuth.uid + address + number;

    const hotelDocRef = doc(hotelCollectionRef, documentId);
    const hotelSnapshot = await getDoc(hotelDocRef);
    const exists = hotelSnapshot.exists();

    if (exists) {
      console.warn("This hotel already exists");
      return hotelDocRef;
    }

    try {
      await setDoc(hotelDocRef, docData);
    } catch (error) {
      console.warn("New hotel creation has failed... Please try again later.");
    }
  }

  async updateHotel(target: TargetHotel, hotelData: updateHotelDTO) {
    const {
      title,
      description,
      evaluation,
      number,
      cover,
      photos,
      benefits,
      isAvaliable,
      address,
      rooms,
      plan_id,
    } = hotelData;

    const docData = {
      title: title,
      description: description,
      evaluation: evaluation,
      number: number,
      cover: cover,
      photos: photos,
      benefits: benefits,
      isAvailable: isAvaliable,
      address: address,
      rooms: rooms,
      plan_id: plan_id,
    };

    const documentId = target.uid;

    const hotelDocRef = doc(hotelCollectionRef, documentId);
    const hotelSnapshot = await getDoc(hotelDocRef);
    const exists = hotelSnapshot.exists();

    if (!exists) {
      console.warn("This hotel does not exist");
      return hotelDocRef;
    }

    try {
      await updateDoc(hotelDocRef, docData);
    } catch (error) {
      console.warn("Hotel update has failed... Please try again later.");
    }
  }
}

const hotelRepo = new HotelRepo();

export default hotelRepo;
