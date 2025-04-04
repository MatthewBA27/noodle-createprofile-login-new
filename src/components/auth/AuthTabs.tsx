
import React from "react";

interface AuthTabsProps {
  activeTab: "create" | "login";
  onTabChange: (tab: "create" | "login") => void;
}

const AuthTabs: React.FC<AuthTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex w-full items-stretch text-base text-[rgba(27,67,77,1)] tracking-[-0.32px] font-sans">
      <button
        onClick={() => onTabChange("create")}
        className={`flex-1 gap-2 p-4 border-b-8 transition-all ${
          activeTab === "create"
            ? "border-[rgba(195,244,75,1)] font-extrabold"
            : "border-transparent font-normal"
        }`}
      >
        Create New Profile
      </button>
      <button
        onClick={() => onTabChange("login")}
        className={`flex-1 gap-2 p-4 border-b-8 transition-all ${
          activeTab === "login"
            ? "border-[rgba(195,244,75,1)] font-extrabold"
            : "border-transparent font-normal"
        }`}
      >
        Login
      </button>
    </div>
  );
};

export default AuthTabs;
