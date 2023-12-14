import React from "react";
import LogoutButton from "@/app/components/LogoutButton";

const AdminDashboardPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Your dashboard content goes here */}
      <LogoutButton />
    </div>
  );
};

export default AdminDashboardPage;
