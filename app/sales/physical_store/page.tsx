// pages/system/sales/physical_store/index.tsx
import React from "react";
import SalesLog from "@/app/components/SalesLog";
import SalesReport from "@/app/components/SalesReport";
import SalesUploadForm from "@/app/components/SalesUploadForm";

const PhysicalStoreSales: React.FC = () => {
  return (
    <div>
      <h1>Physical Store Sales</h1>
      <div>{/* Display relevant dashboard information */}</div>
      <SalesLog />
      <SalesReport />
      <SalesUploadForm />
    </div>
  );
};

export default PhysicalStoreSales;
