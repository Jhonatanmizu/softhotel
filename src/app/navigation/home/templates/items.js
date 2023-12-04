import { HotelCard } from "../../../common";
import { imageUrl } from "./image";

export const items = [
  <div key={1}>
    <HotelCard
      imageUrl={imageUrl}
      hotelName="Hotel"
      stars={4}
      initialPrice={300}
      finalPrice={1500}
      classification={9}
      benefits={["Sei lá"]}
    />
  </div>,
  <div key={2}>
    <HotelCard
      imageUrl={imageUrl}
      hotelName="Hotel"
      stars={4}
      initialPrice={300}
      finalPrice={1500}
      classification={9}
      benefits={["Sei lá"]}
    />
  </div>,
  <div key={3}>
    <HotelCard
      imageUrl={imageUrl}
      hotelName="Hotel"
      stars={4}
      initialPrice={300}
      finalPrice={1500}
      classification={9}
      benefits={["Sei lá"]}
    />
  </div>,
  <div key={4}>
    <HotelCard
      imageUrl={imageUrl}
      hotelName="Hotel"
      stars={4}
      initialPrice={300}
      finalPrice={1500}
      classification={9}
      benefits={["Sei lá"]}
    />
  </div>,
];
