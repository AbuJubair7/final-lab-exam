// components/common/RegistrationForm.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const router = useRouter();

  const handleRegister = async () => {
    try {
      const user = {
        fullName,
        email,
        address,
        phoneNumber,
      };
      alert("Registration successful for user: " + user.fullName);
      // Redirect to the login page or any other page as needed
      router.push("admin/login");
    } catch (error) {
      alert("Error during registration.");
    }
  };

  return (
    <div>
      <label>Full Name:</label>
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Address:</label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <label>Phone Number:</label>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <button onClick={handleRegister}>Sign Up</button>
    </div>
  );
};

export default RegistrationForm;
