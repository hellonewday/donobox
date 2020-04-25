import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import Axios from "axios";

class Login extends Component {
  state = {
    email: null,
    password: null,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    Axios.post(`https://donobox.herokuapp.com/api/users/login`, this.state)
      .then((response) => {
        if (response.data.success) alert("Đăng nhập thành công!");
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("id", response.data.id);
        window.localStorage.setItem("name", response.data.name);

        console.log(response.data);
        window.location.replace("/");
      })
      .catch((error) => console.log(error.response));
  };
  render() {
    return (
      <div className="form-auth">
        <h3 style={{ textAlign: "center" }}>Đã có tài khoản?</h3>
        <br />
        <TextField
          label="Email"
          type="email"
          name="email"
          onChange={this.handleChange}
          style={{ margin: 10 }}
          variant="outlined"
        />
        <br />
        <TextField
          label="Mật khẩu"
          type="password"
          name="password"
          onChange={this.handleChange}
          style={{ margin: 10 }}
          variant="outlined"
        />
        <br />
        <Button
          onClick={this.handleSubmit}
          fullWidth
          color="primary"
          variant="contained"
        >
          Đăng nhập
        </Button>
      </div>
    );
  }
}

export default Login;
