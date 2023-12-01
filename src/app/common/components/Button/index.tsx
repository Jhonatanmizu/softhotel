import React, { ButtonHTMLAttributes } from "react";

interface Props {
  text: string;
  disabled?: boolean;
  handleClick: () => void;
  variant?: "success" | "warning" | "failed";
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const Button = ({
  text = "",
  disabled = false,
  handleClick = () => {},
  variant = "success",
  type = "button",
}: Props) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`
        ${variant ? `bg-${variant}` : "bg-success"}
      p-1 rounded-lg  text-white hover:duration-500 hover:ease-in-out mb-4 hover:opacity-75 ${
        disabled ? "opacity-70" : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
