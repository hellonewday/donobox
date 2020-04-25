import React, { Component } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import Axios from "axios";

class EditProfile extends Component {
  state = {
    data: [],
    output: [],
  };
  componentDidMount() {
    Axios.get(
      `https://donobox.herokuapp.com/api/users/${this.props.match.params.id}`
    )
      .then((response) => {
        this.setState({ data: response.data.data });
        console.log(this.state.data);
      })
      .catch((error) => console.log(error.response));
  }

  handleChange = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
    this.setState({
      output: { ...this.state.output, [e.target.name]: e.target.value },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.output);
    Axios.patch(
      `https://donobox.herokuapp.com/api/users/${this.props.match.params.id}`,
      this.state.output
    )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  render() {
    return (
      <Container>
        <h3>Chỉnh sửa thông tin cá nhân</h3>
        <TextField
          fullWidth
          label="Tên nhà tài trợ"
          autoFocus
          name="name"
          variant="outlined"
          value={this.state.data.name}
          onChange={this.handleChange}
        />
        <br /> <br />
        <TextField
          fullWidth
          label="Địa chỉ"
          name="location"
          variant="outlined"
          value={this.state.data.location}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <TextField
          fullWidth
          label="Trang web"
          name="website"
          variant="outlined"
          value={this.state.data.website}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <TextField
          fullWidth
          label="Số điện thoại"
          name="phoneNumber"
          variant="outlined"
          value={this.state.data.phoneNumber}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <Button color="primary" margin="dense" onClick={this.handleSubmit}>
          Lưu
        </Button>
      </Container>
    );
  }
}

export default EditProfile;
