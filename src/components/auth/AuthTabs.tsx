import React from "react";

interface AuthTabsProps {
  activeTab: "create" | "login";
  onTabChange: (tab: "create" | "login") => void;
}

const AuthTabs: React.FC<AuthTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex min-h-14 w-full items-stretch text-base text-[rgba(27,67,77,1)] tracking-[-0.32px] flex-wrap max-md:max-w-full">
      <button
        onClick={() => onTabChange("create")}
        className={`self-stretch min-w-60 gap-2 font-extrabold h-full flex-1 shrink basis-[0%] p-2 ${
          activeTab === "create"
            ? "border-b-[6px] border-[rgba(195,244,75,1)]"
            : ""
        }`}
      >
        Create New Profile
      </button>
      <button
        onClick={() => onTabChange("login")}
        className={`self-stretch min-w-60 gap-2 font-normal whitespace-nowrap h-full flex-1 shrink basis-[0%] p-2 ${
          activeTab === "login"
            ? "border-b-[6px] border-[rgba(195,244,75,1)]"
            : ""
        }`}
      >
        Login
      </button>
    </div>
  );
};

export default AuthTabs;
