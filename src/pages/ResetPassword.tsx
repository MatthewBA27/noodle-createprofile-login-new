
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/auth/AuthLayout";
import FormInput from "@/components/auth/FormInput";

const ResetPassword: React.FC = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors = {
      newPassword: "",
      confirmPassword: "",
    };
    let isValid = true;

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
      isValid = false;
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
      isValid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send the new password to your backend
      console.log("Password reset submitted:", formData.newPassword);
      
      // Redirect to login page
      navigate("/");
    }
  };

  return (
    <AuthLayout logoSrc="https://cdn.builder.io/api/v1/image/assets/27e72780e13b45c68e2002845d395d80/9b12030efac60a0b627d4e36d4f07b7c860a871c?placeholderIfAbsent=true">
      <div className="w-full font-sans">
        <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
          <h1 className="text-[rgba(27,67,77,1)] text-[32px] font-extrabold tracking-[-0.64px] max-md:max-w-full">
            Set new password
          </h1>
          <p className="text-[rgba(137,137,137,1)] text-xl font-normal tracking-[-0.4px] mt-1.5 max-md:max-w-full">
            Create a new password for your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="w-full text-sm tracking-[-0.28px] max-md:max-w-full space-y-4">
            <FormInput
              label="New Password"
              placeholder="Enter your new password"
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              error={errors.newPassword}
            />

            <FormInput
              label="Confirm Password"
              placeholder="Confirm your new password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              error={errors.confirmPassword}
            />
          </div>

          <button
            type="submit"
            className="self-stretch bg-[rgba(211,194,248,1)] min-h-10 w-full gap-2 overflow-hidden text-sm text-[rgba(27,67,77,1)] font-extrabold tracking-[-0.28px] mt-8 px-5 py-[11px] rounded-lg max-md:max-w-full transition-all duration-300 hover:bg-[rgba(187,156,255,1)] hover:shadow-md"
          >
            Save New Password
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
