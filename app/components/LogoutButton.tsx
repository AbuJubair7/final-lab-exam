// components/common/LogoutButton.tsx
"use client";
import React, { use } from "react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    router.push("/admin/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
