// pages/registration.tsx
import React from "react";
import RegistrationForm from "@/app/components/RegistrationForm";

const RegistrationPage: React.FC = () => {
  return (
    <div>
      <h1>User Registration</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
