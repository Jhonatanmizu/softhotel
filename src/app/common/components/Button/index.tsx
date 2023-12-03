import React, { ButtonHTMLAttributes } from "react";

interface Props {
  text: string;
  disabled?: boolean;
  handleClick: () => void;
  variant?: "success" | "warning" | "failed" | "info" | "outline";
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
        ${
          variant
            ? `bg-${variant}`
            : variant === "outline"
            ? "bg-none"
            : "bg-success"
        }
      p-1 rounded-lg  ${
        variant === "outline" ? "text-primary" : "text-white"
      }  hover:duration-500 hover:ease-in-out mb-4 hover:opacity-75 ${
        variant === "outline" ? "border-primary " : ""
      } ${disabled ? "opacity-70" : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
