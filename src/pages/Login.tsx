import React, { useState } from "react";
import "../css/Login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleClick = () => {
    console.log({ user, pass });
  };

  return (
    <div className="login">
      <div className="login-box">
        login
        {/* <label className="label">username</label> */}
        <input
          className="input"
          placeholder="username"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        {/* <label className="label">password</label> */}
        <input
          className="input"
          type="password"
          placeholder="password"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button className="button" onClick={handleClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
