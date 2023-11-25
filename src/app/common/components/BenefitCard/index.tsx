//React
import React from "react";

//NextJs
import Image from "next/image";

interface Props {
  imageUrl: string;
  title: string;
  text: string;
}

const BenefitCard = ({ imageUrl, title, text }: Props) => {
  return (
    <div className="flex flex-col justify-around bg-white border w-96 min-h-[12.625rem] shadow-md p-4 font-medium text-sm rounded-2xl text-left">
      <Image
        src={imageUrl}
        alt="benefit card image"
        width={500}
        height={500}
        className="w-[100%] h-[4rem] rounded-lg shadow self-center object-fill"
      />

      <p className="text-black-alt text-lg font-display">{title}</p>
      <p className="text-black-alt font-body">{text}</p>
    </div>
  );
};

export default BenefitCard;
