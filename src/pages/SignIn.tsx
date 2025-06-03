import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login logic
    if (form.username === "john_doe" && form.password === "123456") {
      localStorage.setItem("user", JSON.stringify({ username: form.username }));
      navigate("/cars");
    } else {
      alert("Invalid login details.");
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-midnight to-[#0B111D] flex items-center justify-center overflow-hidden">
      {/* background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1740&q=80')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Glassmorphic form container */}
      <div className="relative z-10 w-full max-w-md p-8 bg-white/5 backdrop-blur-md border border-slateGray/50 rounded-3xl shadow-2xl">
        {/* Logo & Tagline */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-heading text-champagne">DriveLuxe</h1>
          <p className="mt-1 text-slateGray text-sm italic">Your Premium Ride Awaits</p>
        </div>

        {/* Welcome text */}
        <h2 className="text-xl font-semibold mb-6 text-pearlWhite text-center">
          Welcome back, ready to roll?
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm text-slateGray mb-1" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              placeholder="e.g. john_doe"
              className="w-full px-4 py-2 bg-[#1A1F2E] border border-slateGray rounded-lg text-pearlWhite placeholder-slateGray focus:outline-none focus:ring-2 focus:ring-luxeGold transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-slateGray mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-[#1A1F2E] border border-slateGray rounded-lg text-pearlWhite placeholder-slateGray focus:outline-none focus:ring-2 focus:ring-luxeGold transition"
              required
            />
          </div>

          {/* ReCAPTCHA Placeholder */}
          <div className="flex justify-center">
            <div className="w-full h-[70px] bg-slateGray/20 rounded-lg flex items-center justify-center">
              <span className="text-xs text-slateGray">[ ReCAPTCHA Placeholder ]</span>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-champagne text-midnight font-semibold hover:bg-luxeGold hover:scale-[1.02] transition-transform duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slateGray">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-champagne underline hover:text-luxeGold transition"
            >
              Sign Up
            </a>
          </p>
          <p className="mt-2 text-xs text-slateGray">
            <a
              href="#"
              className="hover:text-luxeGold transition"
            >
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
