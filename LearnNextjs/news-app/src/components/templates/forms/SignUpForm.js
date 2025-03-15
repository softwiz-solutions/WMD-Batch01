import React from "react";

function SignupForm({
  name,
  email,
  password,
  confirm,
  setName,
  setEmail,
  setPassword,
  setConfirm,
  onSignup,
  goToLogin,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        Sign Up
      </button>

      <p className="text-center">
        Already have an account?{" "}
        <button
          type="button"
          className="text-blue-600 hover:underline"
          onClick={goToLogin}
        >
          Login
        </button>
      </p>
    </form>
  );
}

export default SignupForm;
