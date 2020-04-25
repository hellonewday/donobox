import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

class Login extends Component {
  state = {
    email: null,
    password: null,
  };
  render() {
    return (
      <div className="form-auth">
        <h3 style={{ textAlign: "center" }}>Đã có tài khoản?</h3>
        <br />
        <TextField
          label="Email"
          type="email"
          style={{ margin: 10 }}
          variant="outlined"
        />
        <br />
        <TextField
          label="Mật khẩu"
          type="password"
          style={{ margin: 10 }}
          variant="outlined"
        />
        <br />
        <Button fullWidth color="primary" variant="contained">
          Đăng nhập
        </Button>
      </div>
    );
  }
}

export default Login;
