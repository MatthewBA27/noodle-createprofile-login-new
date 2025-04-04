
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import AuthLayout from "@/components/auth/AuthLayout";
import FormInput from "@/components/auth/FormInput";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const validateEmail = (): boolean => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateEmail()) {
      // In a real app, you would send a reset request to your backend
      console.log("Password reset requested for:", email);
      setIsSubmitted(true);
    }
  };

  const navigateToLogin = () => {
    navigate("/");
  };

  return (
    <AuthLayout logoSrc="https://cdn.builder.io/api/v1/image/assets/27e72780e13b45c68e2002845d395d80/9b12030efac60a0b627d4e36d4f07b7c860a871c?placeholderIfAbsent=true">
      <div className="w-full font-sans">
        {!isSubmitted ? (
          <div className="w-full">
            <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
              <h1 className="text-[rgba(27,67,77,1)] text-[32px] font-extrabold tracking-[-0.64px] max-md:max-w-full">
                Reset your password
              </h1>
              <p className="text-[rgba(137,137,137,1)] text-xl font-normal tracking-[-0.4px] mt-1.5 max-md:max-w-full">
                Enter your email address and we'll send you a link to reset your password
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
              <div className="w-full text-sm tracking-[-0.28px] max-md:max-w-full">
                <FormInput
                  label="Email"
                  placeholder="Enter your email address"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  error={error}
                />
              </div>

              <button
                type="submit"
                className="self-stretch bg-[rgba(211,194,248,1)] min-h-10 w-full gap-2 overflow-hidden text-sm text-[rgba(27,67,77,1)] font-extrabold tracking-[-0.28px] mt-8 px-5 py-[11px] rounded-lg max-md:max-w-full transition-all duration-300 hover:bg-[rgba(187,156,255,1)] hover:shadow-md"
              >
                Send Reset Link →
              </button>
            </form>

            <div className="text-center mt-6">
              <a
                href="#"
                onClick={navigateToLogin}
                className="text-[rgba(187,156,255,1)] font-medium"
              >
                Back to login
              </a>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 rounded-full bg-[rgba(211,194,248,0.2)] flex items-center justify-center mb-6">
              <Check size={32} className="text-[rgba(187,156,255,1)]" />
            </div>
            
            <h1 className="text-[rgba(27,67,77,1)] text-[32px] font-extrabold tracking-[-0.64px] max-md:max-w-full">
              Check your email
            </h1>
            
            <p className="text-[rgba(137,137,137,1)] text-xl font-normal tracking-[-0.4px] mt-3 text-center max-w-md">
              We've sent a password reset link to <span className="font-semibold">{email}</span>. Please check your inbox and follow the instructions to reset your password.
            </p>

            <div className="mt-8">
              <a
                href="#"
                onClick={navigateToLogin}
                className="text-[rgba(187,156,255,1)] font-medium"
              >
                Return to login
              </a>
            </div>
          </div>
        )}
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
