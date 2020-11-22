import React, { useState, useEffect } from "react";
import "../css/Login.css";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "loginId":
        setLoginId(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
    }
  };
  const handleLogin = () => {
    history.push("/manage");
  };
  return (
    <div className="login__page">
      <div className="login__content">
        <form className="login__form">
          <p>Are you Admin? Authenticate!!!</p>
          <label htmlFor="loginId">LoginId</label>
          <br />
          <input
            type="text"
            name="loginId"
            placeholder="Id Please?"
            value={loginId}
            autoFocus
            onChange={handleChange}
          />
          <br />
          <label htmlFor="password">Secret</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Secret"
            value={password}
            onChange={handleChange}
          />
          <br />
          <div className="button__login" onClick={handleLogin}>
            <p>Login</p>
          </div>
          <span onClick={() => history.push("/")}>
            <code>Cancel?</code>
          </span>
        </form>
      </div>
    </div>
  );
};
export default Login;
