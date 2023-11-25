import React from "react";

interface Props {
  text: string;
  disabled?: boolean;
  handleClick: () => void;
}

const Button = ({
  text = "",
  disabled = false,
  handleClick = () => {},
}: Props) => {
  return (
    <button
      onClick={handleClick}
      className={`bg-success p-1 rounded-lg  text-white hover:duration-500 hover:ease-in-out mb-4 hover:opacity-75 ${
        disabled ? "opacity-70" : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
