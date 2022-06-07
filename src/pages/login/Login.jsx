import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import "./login.css";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("LOGIN CLICKED");
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      // console.log(res.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  console.log(user);

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="enter your username..."
          ref={userRef}
        ></input>
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="enter your password..."
          ref={passwordRef}
        ></input>
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <buton className="loginRegisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </buton>
    </div>
  );
}
