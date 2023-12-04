import { DefaultSlider, BenefitCard, Footer } from "../../common/";
import { items } from "./templates/items";
import { benefits } from "./templates/benefits";

function HomePage() {
  const benefitsList = benefits.map((item, index) => (
    <BenefitCard
      key={index}
      imageUrl={item.imageUrl}
      title={item.title}
      text={item.description}
    />
  ));

  return (
    <div className="flex flex-col w-full full justify-between items-center gap-4">
      <div className="flex flex-col w-full">
        <p className="ml-5 text-2xl text-black-alt font-medium">Por Perto</p>
        <DefaultSlider items={items} />
      </div>
      <div className="flex flex-col w-full">
        <p className="ml-5 text-2xl text-black-alt font-medium">Recomendado</p>
        <DefaultSlider items={items} />
      </div>
      <div className="flex flex-col w-full">
        <p className="ml-5 text-2xl text-black-alt font-medium">
          Nossos benefícios
        </p>
        <div className="flex flex-col sm:flex-row items-center">
          <DefaultSlider items={benefitsList} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
