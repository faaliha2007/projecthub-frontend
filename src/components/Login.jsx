import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ switchToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl w-96 shadow-xl border border-white/20">

        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Welcome Back 👋
        </h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-3 rounded-lg bg-white/80 text-black outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-2 rounded-lg bg-white/80 text-black outline-none focus:ring-2 focus:ring-blue-400"
        />

        {error && (
          <p className="text-red-300 text-sm mb-3">{error}</p>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-pink-400 hover:bg-pink-500 text-white py-3 rounded-lg font-semibold transition duration-300 hover:scale-105"
        >
          Login
        </button>

        <p className="text-center text-sm text-white mt-4">
          Don’t have an account?{" "}
          <span
            onClick={switchToSignup}
            className="text-pink-300 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}