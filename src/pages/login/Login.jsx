import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="enter your email..."
        ></input>
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="enter your password..."
        ></input>
        <button className="loginButton">Login</button>
      </form>
      <buton className="loginRegisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </buton>
    </div>
  );
}
