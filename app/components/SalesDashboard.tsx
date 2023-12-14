"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SalesDashboard = () => {
  const router = useRouter();

  const navigateToPage = (page: string) => {
    router.push(`/product_management/${page.toLowerCase()}`);
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "20px",
        backgroundColor: "#f8f8f8",
      }}
    >
      <p>Number of products sold:</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={() => navigateToPage("existing_products")}
        >
          Existing Products
        </button>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={() => navigateToPage("upcoming_products")}
        >
          Upcoming Products
        </button>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={() => navigateToPage("add_product")}
        >
          Add Product
        </button>
      </div>
      {/* Add relevant dashboard information */}
    </div>
  );
};

export default SalesDashboard;
