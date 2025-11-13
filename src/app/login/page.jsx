"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [companyCode, setCompanyCode] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Static credentials
    const validCompany = "ERP123";
    const validUser = "admin";
    const validPass = "123456";

    if (companyCode === validCompany && username === validUser && password === validPass) {
      router.push("/dashboard"); // redirect after login
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Left Section */}
        <div className="w-1/2 bg-blue-100 flex flex-col justify-center items-center p-8 text-center">
          <h1 className="text-5xl font-bold text-blue-700 mb-4">Simplified ERP</h1>
          <p className="text-gray-600">
            Manage your business operations efficiently — Accounting, HR, Inventory & more.
          </p>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              E
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-gray-700">Sign in</h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Company Code"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={companyCode}
              onChange={(e) => setCompanyCode(e.target.value)}
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 font-semibold"
            >
              Sign in
            </button>

            <button
              type="button"
              className="w-full border border-gray-300 text-gray-700 rounded-lg py-2 font-medium hover:bg-gray-100"
            >
              Support
            </button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-4">
            Version 1.0.0 • © 2025 ERP Solutions Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
  );
}
