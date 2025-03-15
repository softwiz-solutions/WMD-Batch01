"use client";
import { useProviderContext } from "@/context/Provider";
import { useRouter } from "next/navigation";
import React, { useReducer, useState } from "react";

function LoginForm() {
  const { setUser, setIsUserLogined } = useProviderContext();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ email: email, name: userName });
    setIsUserLogined(true);
    router.push("/");
  };
  const goToSignup = () => {
    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Login
      </button>

      <p className="text-center">
        Don&apos;t have an account?{" "}
        <button
          type="button"
          className="text-blue-600 hover:underline"
          onClick={goToSignup}
        >
          Sign Up
        </button>
      </p>
    </form>
  );
}

export default LoginForm;
