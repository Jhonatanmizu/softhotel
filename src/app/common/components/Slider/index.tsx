"use client";
import { ReactNode } from "react";

//Components
import Image from "next/image";

//Slider
import Slider from "react-slick";
//Slider Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Icons
import NextArrow from "../../images/rightArrow.svg";
import BackArrow from "../../images/leftArrow.svg";

//Interface
interface Props {
  items: ReactNode[];
}

const DefaultSlider = ({ items }: Props) => {
  //Slider settings
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
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
