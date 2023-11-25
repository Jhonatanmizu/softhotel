import React from "react";

interface Props {
  label: string;
  placeholder?: string;
  errorMessage?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  onFocus?: (value: string) => void;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
}

const FormControlInput = ({
  label = "",
  placeholder = "",
  errorMessage = "",
  value = "",
  onChange = (value: string) => {},
  onBlur = () => {},
  onFocus = () => {},
  type = "text",
  required = false,
}: Props) => {
  return (
    <div className="flex-col flex w-full gap-2">
      <label htmlFor={label} className="text-black-alt text-md">
        {label}
      </label>
      <input
        className="rounded-xl  p-2 outline-none border-none"
        type={type}
        value={value}
        name={label}
        placeholder={placeholder}
        required={required}
        id={label}
        aria-label={label}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        // onFocus={(event) => onFocus(event.target.value)}
      />
      {errorMessage && <span className="text-failed">{errorMessage}</span>}
    </div>
  );
};

export default FormControlInput;
