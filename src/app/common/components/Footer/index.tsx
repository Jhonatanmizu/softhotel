const defaultApresentation = `Bem-vindo à nossa plataforma de busca de hotéis,
onde a excelência em hospedagem encontra a conveniência das melhores ofertas.
Navegue por uma seleção cuidadosamente curada de acomodações que se adaptam a todos os estilos de viagem e orçamentos.
Embarque nesta jornada conosco, e descubra como tornamos cada viagem uma aventura única.
O mundo aguarda, e estamos aqui para tornar cada estadia memorável. Explore. Reserve. Viaje.`;

const privacy = `Privacidade`;
const termsAndConditions = `Termos e Condições`;

const Footer = () => {
  return (
    <footer className="flex flex-col w-screen bottom-0 items-center p-1 bg-primary text-white text-center gap-1">
      <p>{defaultApresentation}</p>
      <div className="flex flex-row w-full justify-around items-center">
        <a className="hover:cursor-pointer hover:underline">{privacy}</a>
        <a className="hover:cursor-pointer hover:underline">
          {termsAndConditions}
        </a>
      </div>
      <p className="mt-1">© SoftHotel</p>
      <p>Todos os direitos reservados 2023</p>
    </footer>
  );
};

export default Footer;
