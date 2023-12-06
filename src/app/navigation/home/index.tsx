"use client";
import { useState, useMemo } from "react";
//Components
import { DefaultSlider, BenefitCard, HotelCard } from "../../common";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
//Icons
import SearchIcon from "../../common/images/searchIcon.svg";
// DATA
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
    <main className="flex flex-col w-full full justify-between items-center gap-4 pt-5 shadow-lg">
      <ToastContainer />
      <div className="relative flex w-[90%] h-10 sm:w-96 sm:self-start sm:ml-4 items-center transition-all">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchValue}
          onChange={handleSearch}
          className="w-full h-full border border-info rounded-lg pl-5 shadow-lg hover:opacity-70"
        />
        <Image
          src={SearchIcon}
          alt="searchIcon"
          className="absolute w-5 h-5 right-5"
        />
      </div>
      {filteredHotels.length > 0 && searchValue !== "" ? (
        <>
          <h3 className="pl-3 text-2xl text-black-alt font-medium mb-3">
            Resultados para {searchValue}
          </h3>
          <DefaultSlider items={mappedHotels} />
        </>
      ) : null}
      <section className="flex flex-col w-full gap-2">
        <h3 className="pl-3 text-2xl text-black-alt font-medium mb-3">
          Por Perto
        </h3>
        <DefaultSlider items={hotelList} />
      </section>
      <section className="flex flex-col w-full gap-2">
        <h3 className="pl-3 text-2xl text-black-alt font-medium mb-3">
          Recomendado
        </h3>
        <DefaultSlider items={hotelList2} />
      </section>
      <section className="flex flex-col w-full gap-2">
        <h3 className="pl-3 text-2xl text-black-alt font-medium mb-3">
          Nossos benefícios
        </h3>
        <DefaultSlider items={benefitsList} />
      </section>
    </main>
  );
};

export default HomePage;
