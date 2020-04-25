import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";

class Register extends Component {
  state = {
    name: null,
    email: null,
    password: null,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post(`https://donobox.herokuapp.com/api/users/register`, this.state)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error.response));
  };
  render() {
    return (
      <div className="form-auth">
        <h3 style={{ textAlign: "center" }}>Đăng ký tài khoản</h3>
        <TextField
          label="Tên nhà tài trợ"
          style={{ margin: 10 }}
          onChange={this.handleChange}
          name="name"
          variant="outlined"
        />
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
          color="secondary"
          variant="contained"
        >
          Đăng ký
        </Button>
      </div>
    );
  }
}

export default Register;
