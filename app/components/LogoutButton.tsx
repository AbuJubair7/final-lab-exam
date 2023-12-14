// components/common/LogoutButton.tsx
"use client";
import React from "react";

const LogoutButton = () => {
  const handleLogout = async () => {
    alert("Logout successful!");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
