import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  logoSrc: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, logoSrc }) => {
  return (
    <div className="bg-[rgba(242,242,242,1)] flex flex-col items-center justify-center px-[70px] py-[54px] max-md:px-5">
      <div className="flex min-h-[916px] w-full max-w-[1160px] items-stretch flex-wrap max-md:max-w-full">
        <div className="bg-[rgba(27,67,77,1)] flex min-w-60 flex-col items-center justify-center grow shrink w-96 rounded-[8px_0px_0px_8px] max-md:max-w-full">
          <div className="w-[242px] max-w-full">
            <img
              src={logoSrc}
              className="aspect-[1.08] object-contain w-full"
              alt="Logo"
            />
          </div>
        </div>
        <div className="bg-white min-w-60 grow shrink w-[584px] p-12 rounded-[0px_8px_8px_0px] max-md:max-w-full max-md:px-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
