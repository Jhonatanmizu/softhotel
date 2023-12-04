import React, { ButtonHTMLAttributes } from "react";
// Components
import Image from "next/image";
// Images
import spinner from "../../../common/images/spinner.svg";
interface Props {
  text: string;
  disabled?: boolean;
  handleClick: () => void;
  variant?: "success" | "warning" | "failed" | "info" | "outline";
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  isLoading?: boolean;
}

const Button = ({
  text = "",
  disabled = false,
  handleClick = () => {},
  variant = "success",
  type = "button",
  isLoading = false,
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
      } ${disabled ? "opacity-70" : ""} flex items-center justify-center gap-1`}
    >
      {isLoading && (
        <Image
          src={spinner}
          alt="spinner"
          className="bg-none"
          width={20}
          height={20}
        />
      )}
      {text}
    </button>
  );
};

export default Button;
