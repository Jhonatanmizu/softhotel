import { ReactNode } from "react";

const defaultApresentation = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Diam quis enim lobortis scelerisque fermentum. Gravida dictum fusce ut placerat orci nulla pellentesque.
Sed elementum tempus egestas sed sed risus pretium quam vulputate.`;

const privacy = `Privacidade`;
const termsAndConditions = `Termos e Condições`;

const Footer = () => {
  return (
    <footer className="flex flex-col bottom-0 w-screen items-center p-1 bg-primary text-white text-center gap-1">
      <p>{defaultApresentation}</p>
      <div className="flex flex-row w-full justify-around items-center">
        <a className="hover:cursor-pointer hover:underline">{privacy}</a>
        <a className="hover:cursor-pointer hover:underline">
          {termsAndConditions}
        </a>
      </div>
      <p>© SoftHotel</p>
    </footer>
  );
};

export default Footer;
