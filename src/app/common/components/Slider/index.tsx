import Slider from "react-slick";
import { ReactNode } from "react";
//Components
import Image from "next/image";
//Icons
import NextArrow from "../../images/rightArrow.svg";
import BackArrow from "../../images/leftArrow.svg";
// Slider Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
