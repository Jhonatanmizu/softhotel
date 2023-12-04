import React from "react";

interface Props {
  label: string;
  placeholder?: string;
  errorMessage?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: (event: any) => void;
  onFocus?: (value: string) => void;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  maxLength?: number;
}

const FormControlInput = ({
  label = "",
  placeholder = "",
  errorMessage = "",
  value = "",
  onChange = (value: string = "") => {},
  onBlur = (event: any) => {},
  type = "text",
  required = false,
  maxLength = 100,
}: Props) => {
  return (
    <div className="flex-col flex w-full gap-2 mb-4">
      <label
        htmlFor={label}
        className={`text-${
          errorMessage ? "failed" : "black-alt font-body"
        } text-md`}
      >
        {label}
      </label>
      <input
        maxLength={maxLength}
        className={`rounded-xl  p-2 outline-none border-2  ${
          errorMessage ? "border-failed" : "border-primary"
        }  shadow-lg font-body`}
        type={type}
        value={value}
        name={label}
        placeholder={placeholder}
        required={required}
        id={label}
        aria-label={label}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
      />
      {errorMessage && (
        <span className="text-failed text-sm ">{errorMessage}</span>
      )}
    </div>
  );
};

export default FormControlInput;
