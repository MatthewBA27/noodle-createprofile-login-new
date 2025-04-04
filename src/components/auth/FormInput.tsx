
import React from "react";

interface FormInputProps {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  name,
  error,
}) => {
  return (
    <div className="w-full">
      <label className="text-[rgba(27,67,77,1)] font-semibold block">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`self-stretch bg-white border min-h-10 w-full gap-2 overflow-hidden text-[rgba(27,67,77,1)] font-sans font-normal mt-2 pl-2 pr-3 py-[11px] rounded-lg border-[rgba(137,137,137,1)] border-solid max-md:max-w-full focus:outline-none focus:border-[rgba(211,194,248,1)] focus:border-2 focus:ring-1 focus:ring-[rgba(211,194,248,0.3)] transition-all duration-200 ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
