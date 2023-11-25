//React
import React from "react";

//NextJs
import Image from "next/image";

//SVG
import ratingStar from "../../images/ratingStar.svg";

interface Props {
  imageUrl: string;
  hotelName: string;
  stars: number;
  initialPrice: number;
  finalPrice: number;
  classification: number;
  benefits: string[];
}

const HotelCard = ({
  imageUrl,
  hotelName,
  initialPrice,
  finalPrice,
  stars,
  classification,
  benefits,
}: Props) => {
  const countRatingStars = (count: number) => {
    const stars = [];

    for (let i = 0; i < count; i++) {
      stars.push(
        <Image
          key={i}
          width={16}
          height={16}
          src={ratingStar}
          alt={"estrela" + i}
        />
      );
    }

    return stars;
  };

  const displayBenefits = (benefits: string[]) => {
    const hotelBenefits = [];

    for (let i = 0; i < benefits.length; i++) {
      hotelBenefits.push(
        <p
          key={i}
          className="bg-info rounded pr-1 pl-1 max-w-[80%] w-fit font-medium truncate"
        >
          {benefits[i]}
        </p>
      );
    }

    return hotelBenefits;
  };

  return (
    <div className="flex flex-col justify-around bg-white border w-96 min-h-[24rem] shadow-lg p-4 font-medium text-sm rounded-2xl text-left">
      <div className="flex w-[100%] h-[16.875rem]">
        <Image
          src={imageUrl}
          alt="hotel card image"
          width={500}
          height={500}
          className="w-full h-full rounded-lg shadow self-center object-fill"
        />
        <div className="absolute self-end ml-2 mb-2 w-full">
          <section className="flex flex-col gap-1 text-white font-display">
            {displayBenefits(benefits)}
          </section>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <p className="text-black-alt text-3xl font-display font-bold">
          {hotelName}
        </p>

        <div className="flex items-center justify-center self-end bg-success rounded w-8 h-8 absolute mt-2 text-white">
          <span className="font-body text-lg">{classification}</span>
        </div>

        <div className="flex flex-row gap-1 items-center">
          {countRatingStars(stars)}
        </div>

        <span className="flex gap-1 font-body font-bold text-black-alt mt-1">
          <p className="">R$ {initialPrice}</p> -
          <p className="">R$ {finalPrice}</p>
        </span>
      </div>
    </div>
  );
};

export default HotelCard;
