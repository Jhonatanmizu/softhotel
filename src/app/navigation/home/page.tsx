import { DefaultSlider, BenefitCard, Footer } from "../../common/";
import { items } from "./templates/items";
import { benefits } from "./templates/benefits";

function DHome() {
  return (
    <div className="flex flex-col gap-4 justify-between items-center">
      <div className="flex flex-col gap-1 p-1">
        <p className="ml-5 text-2xl text-black-alt font-medium">Por Perto</p>
        <DefaultSlider items={items} />
      </div>
      <div className="flex flex-col gap-1 p-1">
        <p className="ml-5 text-2xl text-black-alt font-medium">Recomendado</p>
        <DefaultSlider items={items} />
      </div>
      <div className="flex flex-col gap-1 p-1">
        <p className=" text-2xl text-black-alt font-medium">
          Nossos benefícios
        </p>
        <div className="flex flex-col gap-2">
          {benefits.map((item, index) => (
            <BenefitCard
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              text={item.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DHome;
