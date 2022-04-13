import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label>username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="enter your username..."
        ></input>
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="enter your email..."
        ></input>

        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="enter your password..."
        ></input>
        <button className="registerButton">Register</button>
      </form>
      <buton className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </buton>
    </div>
  );
}
