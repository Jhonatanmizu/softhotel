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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <Image src={NextArrow} alt="next-arrow" />,
    prevArrow: <Image src={BackArrow} alt="back-arrow" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex w-screen justify-center shadow-lg p-1">
      <Slider {...settings} className="w-[100%] sm:w-[95%]">
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Slider>
    </div>
  );
};

export default DefaultSlider;
