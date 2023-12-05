"use client";
import { useState, useMemo } from "react";

//Components
import { DefaultSlider, BenefitCard, Footer, HotelCard } from "../../common";

import { benefits } from "./templates/benefits";
import { hotelsList, hotelsList2 } from "./templates/hotels";

interface HotelData {
  imageUrl: string;
  hotelName: string;
  stars: number;
  initialPrice: number;
  finalPrice: number;
  classification: number;
  benefits: string[];
}

const fullHotelList = hotelsList.concat(hotelsList2);

const benefitsList = benefits.map((item, index) => (
  <BenefitCard
    key={index}
    imageUrl={item.imageUrl}
    title={item.title}
    text={item.description}
  />
));

const hotelList = hotelsList.map((item, index) => (
  <HotelCard
    key={index}
    imageUrl={item.imageUrl}
    hotelName={item.hotelName}
    stars={item.stars}
    initialPrice={item.initialPrice}
    finalPrice={item.finalPrice}
    classification={item.classification}
    benefits={item.benefits}
  />
));

const hotelList2 = hotelsList2.map((item, index) => (
  <HotelCard
    key={index}
    imageUrl={item.imageUrl}
    hotelName={item.hotelName}
    stars={item.stars}
    initialPrice={item.initialPrice}
    finalPrice={item.finalPrice}
    classification={item.classification}
    benefits={item.benefits}
  />
));

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");

  const filteredHotels = useMemo(() => {
    return fullHotelList.filter(
      (item) =>
        item.hotelName
          .toLowerCase()
          .trim()
          .indexOf(searchValue.toLowerCase().trim()) > -1
    );
  }, [searchValue]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchValue(term);
  };

  const mappedHotels = filteredHotels.map((filteredHotel, index) => (
    <HotelCard key={index} {...filteredHotel} />
  ));

  return (
    <main className="flex flex-col w-full full justify-between items-center gap-4">
      <input
        type="text"
        placeholder="Pesquisar"
        value={searchValue}
        onChange={handleSearch}
      />
      {filteredHotels.length > 0 && searchValue !== "" ? (
        <DefaultSlider items={mappedHotels} />
      ) : null}
      <section className="flex flex-col w-full gap-2">
        <p className="pl-3 text-2xl text-black-alt font-medium mb-3">
          Por Perto
        </p>
        <DefaultSlider items={hotelList} />
      </section>
      <section className="flex flex-col w-full gap-2">
        <p className="pl-3 text-2xl text-black-alt font-medium mb-3">
          Recomendado
        </p>
        <DefaultSlider items={hotelList2} />
      </section>
      <section className="flex flex-col w-full gap-2">
        <p className="pl-3 text-2xl text-black-alt font-medium mb-3">
          Nossos benefícios
        </p>
        <DefaultSlider items={benefitsList} />
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;
