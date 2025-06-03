import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate saving user
    localStorage.setItem("user", JSON.stringify({ username: form.username }));
    navigate("/cars");
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h2 className="text-2xl font-heading text-champagne mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full p-2 bg-midnight border border-slateGray rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 bg-midnight border border-slateGray rounded"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-2 bg-midnight border border-slateGray rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-champagne text-midnight py-2 rounded font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
