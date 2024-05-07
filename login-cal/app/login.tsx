import { useRouter } from "next/navigation";
import { useState } from "react";
import jwt from 'jsonwebtoken';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    
    // Simulated authentication logic, replace this with your actual authentication logic
    if (username === "venky" && password === "venky") {
      const token = jwt.sign({ username }, 'your-secret-key');
      localStorage.setItem('token', token); // Store token in local storage
      router.push("/addition");
    } else if (username === "ram" && password === "ram") {
      const token = jwt.sign({ username }, 'your-secret-key');
      localStorage.setItem('token', token); // Store token in local storage
      router.push("/substraction");
    } else if (username === "jai" && password === "jai") {
      const token = jwt.sign({ username }, 'your-secret-key');
      localStorage.setItem('token', token); // Store token in local storage
      router.push("/multiplication");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
