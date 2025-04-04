import React, { useState } from "react";
import FormInput from "./FormInput";
import SocialLogin from "./SocialLogin";
import AuthTabs from "./AuthTabs";

interface FormData {
  schoolName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  schoolName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  agreeToTerms?: string;
}

interface CreateAccountFormProps {
  onTabChange: (tab: "create" | "login") => void;
}

const CreateAccountForm: React.FC<CreateAccountFormProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<"create" | "login">("create");
  const [formData, setFormData] = useState<FormData>({
    schoolName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.schoolName.trim()) {
      newErrors.schoolName = "School name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your backend
    }
  };

  const handleTabChange = (tab: "create" | "login") => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  const navigateToLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    handleTabChange("login");
  };

  return (
    <form onSubmit={handleSubmit} className="font-sans">
      <AuthTabs activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="w-full mt-6 max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
              <h1 className="text-[rgba(27,67,77,1)] text-[32px] font-extrabold tracking-[-0.64px] max-md:max-w-full">
                Get started now
              </h1>
              <p className="text-[rgba(137,137,137,1)] text-xl font-normal tracking-[-0.4px] mt-1.5 max-md:max-w-full">
                Please enter your credentials to access your account
              </p>
            </div>

            <div className="w-full text-sm tracking-[-0.28px] mt-6 max-md:max-w-full space-y-4">
              <FormInput
                label="School Name"
                placeholder="Enter your school name"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleInputChange}
                error={errors.schoolName}
              />

              <FormInput
                label="School Email"
                placeholder="Enter school email address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
              />

              <FormInput
                label="Password"
                placeholder="Enter your password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                error={errors.password}
              />

              <FormInput
                label="Confirm Password"
                placeholder="Re-enter your password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                error={errors.confirmPassword}
              />
            </div>

            <div className="flex w-full items-center text-sm text-[rgba(137,137,137,1)] font-normal tracking-[-0.28px] justify-between mt-6 max-md:max-w-full">
              <div className="self-stretch flex items-center gap-[11px] my-auto">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="bg-white border self-stretch w-6 h-6 shrink-0 gap-2 my-auto rounded-lg border-[rgba(137,137,137,1)] border-solid"
                />
                <label htmlFor="agreeToTerms" className="self-stretch my-auto">
                  I agree to the{" "}
                  <span className="font-medium underline cursor-pointer">
                    terms and policy
                  </span>
                </label>
              </div>
            </div>
            {errors.agreeToTerms && (
              <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>
            )}
          </div>

          <button
            type="submit"
            className="self-stretch bg-[rgba(211,194,248,1)] min-h-10 w-full gap-2 overflow-hidden text-sm text-[rgba(27,67,77,1)] font-extrabold tracking-[-0.28px] mt-8 px-[107px] py-[11px] rounded-lg max-md:max-w-full max-md:mt-8 max-md:px-5 transition-all duration-300 hover:bg-[#D3C2F8] hover:shadow-md"
          >
            Sign Up
          </button>
        </div>

        <SocialLogin />
      </div>

      <div className="text-[rgba(137,137,137,1)] text-sm font-normal tracking-[-0.28px] text-center mt-6 max-md:max-w-full">
        Already have an account?{" "}
        <a
          href="#"
          onClick={navigateToLogin}
          className="font-extrabold text-[rgba(187,156,255,1)]"
        >
          Login here!
        </a>
      </div>
    </form>
  );
};

export default CreateAccountForm;
