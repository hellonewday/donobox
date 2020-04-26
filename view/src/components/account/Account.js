import React from "react";
import Register from "./Register";
import Login from "./Login";
import "../../App.css";

const Account = () => {
  return (
    <div>
      <div className="account-form">
        <Register />
        <Login />
      </div>
    </div>
  );
};

export default Account;
