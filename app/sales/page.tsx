// pages/system/sales/index.tsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SalesDashboard: React.FC = () => {
  const router = useRouter();

  const navigateToChannel = (channel: string) => {
    router.push(`/sales/${channel.toLowerCase()}`);
  };

  return (
    <div>
      <h1>Sales Dashboard</h1>
      <div>
        <p>Number of products sold:</p>
        {/* Display relevant dashboard information */}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => navigateToChannel("Physical_Store")}>
          Physical Store
        </button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => navigateToChannel("Social_Media")}>
          Social Media
        </button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => navigateToChannel("Ecommerce")}>
          Ecommerce Web App
        </button>
      </div>
    </div>
  );
};

export default SalesDashboard;
