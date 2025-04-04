
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

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
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="w-full">
      <label className="text-[rgba(27,67,77,1)] font-semibold block">
        {label}
      </label>
      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`self-stretch bg-white border min-h-10 w-full gap-2 overflow-hidden text-[rgba(27,67,77,1)] font-sans font-normal mt-2 pl-2 pr-${isPassword ? '10' : '3'} py-[11px] rounded-lg border-[rgba(137,137,137,1)] border-solid max-md:max-w-full focus:outline-none focus:border-[rgba(27,67,77,1)] focus:border-2 focus:ring-1 focus:ring-[rgba(27,67,77,0.3)] transition-all duration-200 
          ${error ? "border-red-500" : ""}
          [&:-webkit-autofill]:bg-[#F1F1F1] [&:-webkit-autofill]:shadow-[0_0_0_30px_#F1F1F1_inset] [&:-webkit-autofill]:transition-colors [&:-webkit-autofill:focus]:shadow-[0_0_0_30px_white_inset] [&:-webkit-autofill:focus]:border-[rgba(27,67,77,1)] [&:-webkit-autofill:focus]:border-2`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[rgba(137,137,137,1)] hover:text-[rgba(27,67,77,1)] transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff size={18} className="mt-1" />
            ) : (
              <Eye size={18} className="mt-1" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
