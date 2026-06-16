import { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login attempted for ${email}`);
  };

  return (
    <div className="booking-wrapper" style={{ maxWidth: 400 }}>
      <div className="booking-form">
        <h2>Login to Wanderly</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <div className="input-wrapper">
            <Mail size={18} />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
          </div>

          <label>Password</label>
          <div className="input-wrapper">
            <Lock size={18} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
          </div>

          <button type="submit" className="confirm-btn">Log in</button>
        </form>
      </div>
    </div>
  );
}