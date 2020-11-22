import React, { useState, useEffect } from "react";
import "../css/Login.css";

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login__page">
      <div className="login__content">
        <form className="login__form">
          <label for="loginId">LoginId</label>
          <input
            type="text"
            name="loginId"
            placeholder="userid"
            value={loginId}
            onClick={(event) => setLoginId(event.target.value)}
          />
          <label for="loginId">Secret</label>
          <input
            type="password"
            name="password"
            placeholder="Secret"
            value={password}
            onClick={(event) => setPassword(event.target.value)}
          />
        </form>
      </div>
    </div>
  );
};
export default Login;
