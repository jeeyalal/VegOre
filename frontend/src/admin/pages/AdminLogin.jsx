import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/admin/login", {
        email,
        password
      });

      if (res.data.success) {
        localStorage.setItem("adminToken", res.data.token);
        navigate("/admin/dashboard");
      } else {
        setError("Invalid credentials");
      }

    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-center text-2xl font-bold mb-4">Admin Login</h2>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleLogin} className="space-y-4">

        <input 
          type="email" 
          className="w-full p-3 border rounded"
          placeholder="Admin Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="password" 
          className="w-full p-3 border rounded"
          placeholder="Admin Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-green-600 p-3 text-white rounded">
          Login
        </button>
      </form>
    </div>
  );
}
