
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  logoSrc: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, logoSrc }) => {
  return (
    <div className="bg-[rgba(242,242,242,1)] flex flex-col items-center justify-center min-h-screen px-[70px] py-[54px] max-md:px-5">
      <div className="flex w-full max-w-[900px] items-stretch flex-wrap max-md:max-w-full shadow-lg">
        <div className="bg-[rgba(27,67,77,1)] flex min-w-60 flex-col items-center justify-center grow shrink w-[350px] rounded-[8px_0px_0px_8px] max-md:max-w-full">
          <div className="w-[200px] max-w-full">
            <img
              src={logoSrc}
              className="aspect-[1.08] object-contain w-full"
              alt="Logo"
            />
          </div>
        </div>
        <div className="bg-white min-w-60 grow shrink w-[500px] p-8 rounded-[0px_8px_8px_0px] max-md:max-w-full max-md:px-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
