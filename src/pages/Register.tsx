import React from "react";
import "../css/Login.css";

const Register = () => {
  return (
    <div className="login">
      <div className="login-box">
        <p>Register</p>
        <input className="input" placeholder="create username" />
        <input className="input" placeholder="mail" />
        <input className="input" placeholder="password" />
        <input
          className="input"
          type="password"
          placeholder="re enter password"
        />
        <button className="button">Register</button>
      </div>
    </div>
  );
};

export default Register;
