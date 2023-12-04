import { HotelCard } from "../../../common";
import imageUrl from "./image";

export const items = [
  <div key={1}>
    <HotelCard
      imageUrl={imageUrl}
      hotelName="Hotel"
      stars={5}
      initialPrice={300}
      finalPrice={1500}
      classification={9.5}
      benefits={[
        "Café da manhã grátis",
        "Cancelamento Gratuito",
        "WiFi Grátis",
      ]}
    />
  </div>,
  <div key={2}>
    <HotelCard
      imageUrl={imageUrl}
      hotelName="Hotel"
      stars={4}
      initialPrice={300}
      finalPrice={1500}
      classification={8.7}
      benefits={["Café da manhã grátis", "Cancelamento Gratuito"]}
    />
  </div>,
  <div key={3}>
    <HotelCard
      imageUrl={imageUrl}
      hotelName="Hotel"
      stars={3}
      initialPrice={300}
      finalPrice={1500}
      classification={8}
      benefits={["Cancelamento Gratuito"]}
    />
  </div>,
  <div key={4}>
    <HotelCard
      imageUrl={imageUrl}
      hotelName="Hotel"
      stars={4}
      key={4}
      initialPrice={300}
      finalPrice={1500}
      classification={9}
      benefits={["WiFi grátis", "Cancelamento Gratuito"]}
    />
  </div>,
];
