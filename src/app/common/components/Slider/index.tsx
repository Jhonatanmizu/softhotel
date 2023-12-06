"use client";
import Slider from "react-slick";
import { ReactNode } from "react";
//Components
import Image from "next/image";
//Icons
import NextArrow from "../../images/rightArrow.svg";
import BackArrow from "../../images/leftArrow.svg";

interface Props {
  items: ReactNode[];
}

const DefaultSlider = ({ items }: Props) => {
  //Slider settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <Image src={NextArrow} alt="next-arrow" />,
    prevArrow: <Image src={BackArrow} alt="back-arrow" />,
  };

  return (
    <div className="flex flex-row w-full mb-[1rem]">
      <Slider {...settings} className="w-full">
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Slider>
    </div>
  );
};

export default DefaultSlider;
