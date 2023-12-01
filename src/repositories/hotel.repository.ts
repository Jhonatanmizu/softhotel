//Firebase
import { doc, setDoc, collection, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase";

//DTOS
import { createHotelDTO } from "@/dtos/hotel.dto";

const hotelCollectionRef = collection(db, "hotels");

class HotelRepo {
  async createHotel(userAuth: User, hotelData: createHotelDTO) {
    const {
      hotelName,
      description,
      evaluation,
      number,
      cover,
      address,
      plan_id,
    } = hotelData;

    const docData = {
      title: hotelName,
      description: description || "",
      evaluation: evaluation || "",
      number: number || "",
      cover: cover || "",
      photos: [],
      isAvailable: false,
      address: address,
      rooms: [],
      plan_id: plan_id,
    };

    const documentId = userAuth.uid + address;

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
}

const hotelRepo = new HotelRepo();

export default hotelRepo;
