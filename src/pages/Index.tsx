
import React, { useState } from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import CreateAccountForm from "@/components/auth/CreateAccountForm";
import LoginForm from "@/components/auth/LoginForm";

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"create" | "login">("create");

  return (
    <AuthLayout logoSrc="https://cdn.builder.io/api/v1/image/assets/27e72780e13b45c68e2002845d395d80/9b12030efac60a0b627d4e36d4f07b7c860a871c?placeholderIfAbsent=true">
      {activeTab === "create" ? (
        <CreateAccountForm onTabChange={setActiveTab} />
      ) : (
        <LoginForm onTabChange={setActiveTab} />
      )}
    </AuthLayout>
  );
};

export default Index;
