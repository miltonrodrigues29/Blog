import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post("auth/register", {
        username,
        email,
        password,
      });

      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm" onSubmit={handleSubmit}>
        <label>username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <buton className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </buton>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something Went Wrong!
        </span>
      )}
    </div>
  );
}
