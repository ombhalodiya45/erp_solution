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
    const validCompany = "ERPOM3642";
    const validUser = "OMPATEL";
    const validPass = "omerp@123";
    if (companyCode === validCompany && username === validUser && password === validPass) {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-lg ring-1 ring-slate-200 bg-white">
        {/* Left: Brand/Intro (professional background color distinct from form) */}
        <div className="relative hidden md:flex flex-col justify-center p-10 lg:p-12 text-white"
             style={{ background: "linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%)" }}>
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-lg bg-white/15 grid place-items-center font-semibold">
                E
              </div>
              <span className="text-sm/5 tracking-wide text-white/80">ERP Solutions</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight">Simplified ERP</h1>
            <p className="mt-3 text-white/85">
              Streamline Accounting, Inventory, and operations with clarity and control.
            </p>
            <div className="mt-6 h-px bg-white/20" />
            <p className="mt-4 text-xs text-white/70">
              Version 1.0.0 • © 2025 ERP Solutions Pvt. Ltd.
            </p>
          </div>

          {/* Decorative subtle shapes for professionalism */}
          <div className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute bottom-6 right-6 h-20 w-20 rounded-full bg-white/10 blur-xl" />
        </div>

        {/* Right: Simple responsive form */}
        <div className="p-6 sm:p-8 lg:p-12">
          {/* Mobile brand header */}
          <div className="md:hidden mb-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-md bg-blue-600 text-white grid place-items-center font-semibold">
                E
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-800">Simplified ERP</h2>
                <p className="text-xs text-slate-500">Welcome back</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900">Sign in</h3>
          <p className="mt-1 text-sm text-slate-500">
            Access your workspace with your credentials.
          </p>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            {/* Company Code */}
            <div>
              <label className="sr-only">Company code</label>
              <input
                type="text"
                placeholder="Company code"
                className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                value={companyCode}
                onChange={(e) => setCompanyCode(e.target.value)}
                autoComplete="organization"
              />
            </div>

            {/* Username */}
            <div>
              <label className="sr-only">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </div>

            {/* Password */}
            <div>
              <label className="sr-only">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 text-white py-3 font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.99] transition"
            >
              Sign in
            </button>

            <button
              type="button"
              className="w-full rounded-xl border border-slate-200 text-slate-700 bg-white py-3 font-medium hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200 active:scale-[0.99] transition"
            >
              Support
            </button>
          </form>

          {/* Mobile footer */}
          <p className="md:hidden text-xs text-slate-400 text-center mt-6">
            Version 1.0.0 • © 2025 ERP Solutions Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
  );
}
