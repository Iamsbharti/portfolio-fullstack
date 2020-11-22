import React, { useState, useEffect } from "react";
import "../css/Login.css";

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login__page">
      <div className="login__content">
        <form className="login__form">
          <p>Are you Admin? Authenticate!!!</p>
          <label for="loginId">LoginId</label>
          <br />
          <input
            type="text"
            name="loginId"
            placeholder="Id Please?"
            value={loginId}
            autoFocus
            onClick={(event) => setLoginId(event.target.value)}
          />
          <br />
          <label for="password">Secret</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Secret"
            value={password}
            onClick={(event) => setPassword(event.target.value)}
          />
          <br />
          <div className="button__login">
            <p>Login</p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
