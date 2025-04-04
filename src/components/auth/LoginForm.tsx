
import React, { useState } from "react";
import FormInput from "./FormInput";
import SocialLogin from "./SocialLogin";
import AuthTabs from "./AuthTabs";

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface LoginFormErrors {
  email?: string;
  password?: string;
}

interface LoginFormProps {
  onTabChange: (tab: "create" | "login") => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<"create" | "login">("login");
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<LoginFormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = (): boolean => {
    const newErrors: LoginFormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Login form submitted:", formData);
      // Here you would typically send the data to your backend
    }
  };

  const handleTabChange = (tab: "create" | "login") => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  const navigateToCreateAccount = (e: React.MouseEvent) => {
    e.preventDefault();
    handleTabChange("create");
  };

  return (
    <form onSubmit={handleSubmit} className="font-sans">
      <AuthTabs activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="w-full mt-6 max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
              <h1 className="text-[rgba(27,67,77,1)] text-[32px] font-extrabold tracking-[-0.64px] max-md:max-w-full">
                Login to your school dashboard
              </h1>
              <p className="text-[rgba(137,137,137,1)] text-xl font-normal tracking-[-0.4px] mt-1.5 max-md:max-w-full">
                Please enter your credentials to access your account
              </p>
            </div>

            <div className="w-full text-sm tracking-[-0.28px] mt-6 max-md:max-w-full space-y-4">
              <FormInput
                label="Email"
                placeholder="Enter your email address"
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
            </div>

            <div className="flex w-full items-center text-sm text-[rgba(137,137,137,1)] font-normal tracking-[-0.28px] justify-between mt-6 max-md:max-w-full">
              <div className="self-stretch flex items-center gap-[11px] my-auto">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="bg-white border self-stretch w-6 h-6 shrink-0 gap-2 my-auto rounded-lg border-[rgba(137,137,137,1)] border-solid"
                />
                <label htmlFor="rememberMe" className="self-stretch my-auto">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-[rgba(187,156,255,1)] font-medium">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="self-stretch bg-[rgba(211,194,248,1)] min-h-10 w-full gap-2 overflow-hidden text-sm text-[rgba(27,67,77,1)] font-extrabold tracking-[-0.28px] mt-8 px-[107px] py-[11px] rounded-lg max-md:max-w-full max-md:mt-8 max-md:px-5 transition-all duration-300 hover:bg-[rgba(187,156,255,1)] hover:shadow-md"
          >
            Sign In
          </button>
        </div>

        <SocialLogin />
      </div>

      <div className="text-[rgba(137,137,137,1)] text-sm font-normal tracking-[-0.28px] text-center mt-6 max-md:max-w-full">
        Don't have an account?{" "}
        <a
          href="#"
          onClick={navigateToCreateAccount}
          className="font-extrabold text-[rgba(187,156,255,1)]"
        >
          Create one here!
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
