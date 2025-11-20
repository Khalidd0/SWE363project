import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("Logged in (mock)");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Login</h2>
      <input 
        className="border p-2 mb-2 w-full"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        className="border p-2 mb-2 w-full"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button 
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}