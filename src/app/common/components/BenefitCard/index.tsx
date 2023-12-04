//Components
import Image from "next/image";

interface Props {
  imageUrl: string;
  title: string;
  text: string;
}

const BenefitCard = ({ imageUrl, title, text }: Props) => {
  return (
    <div className="flex flex-col gap-1 bg-white border w-96 h-[14rem] sm:h-[16rem] shadow-md p-3 font-medium text-sm rounded-2xl text-left ml-2">
      <Image
        src={imageUrl}
        alt="benefit card image"
        width={500}
        height={500}
        className="w-full h-[4rem] rounded-lg shadow self-center object-fill"
      />
      <div className="w-full h-auto sm:h-[12rem] text-ellipsis text-black-alt">
        <p className="text-lg font-display">{title}</p>
        <p className="font-body">{text}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
