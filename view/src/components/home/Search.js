import React, { Component } from "react";
import { Container, TextField, Button } from "@material-ui/core";
// import rice from "../img/rice.jpg";
import Typewriter from "typewriter-effect";
import "../../App.css";
import Axios from "axios";
import DataSlider from "../campaign/DataSlider";

export default class SearchBar extends Component {
  state = {
    name: null,
    data: [],
  };
  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state);
    Axios.get(
      `https://donobox.herokuapp.com/api/campaigns?search=${this.state.name}`
    )
      .then((response) => {
        this.setState({ data: [] });
        console.log(response.data);
        this.setState({ data: response.data.data });
        if (response.data.data.length === 0) alert("Không có kết quả");
      })
      .catch((error) => console.log(error.response));
  };
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div
        style={{
          background: `url('${this.props.image}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginTop: -20,
        }}
      >
        {/* <img src={rice} alt="rice" /> */}
        <Container fixed style={{ padding: "150px 0px 200px 0px" }}>
          <h1 className="search-title">
            <Typewriter
              options={{
                strings: [
                  "Lan tỏa sự giúp đỡ.",
                  "Tìm kiếm sự hỗ trợ.",
                  "Hãy để Donobox giúp bạn nhé!",
                ],
                autoStart: true,
                loop: true,
                cursor: "",
                delay: 40,
                deleteSpeed: 100,
              }}
            />
          </h1>
          <p className="search-desc">
            Tiếp cận với hàng trăm chương trình từ thiện và các chính sách hỗ
            trợ một cách sẽ dàng!
          </p>
          <div style={{ position: "relative" }}>
            <TextField
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                fontSize: 20,
                border: "none",
              }}
              onChange={this.handleChange}
              name="name"
              className="search-input"
              fullWidth
              placeholder="Tìm kiếm chương trình hoặc thành phố bạn cần hỗ trợ"
              variant="outlined"
            />
            <Button
              style={{ top: 10, position: "absolute", right: 10 }}
              color="primary"
              variant="contained"
              onClick={this.handleClick}
            >
              Tìm kiếm
            </Button>
          </div>
          <div>
            {this.state.data.length > 0 ? (
              <DataSlider data={this.state.data} />
            ) : (
              ""
            )}
          </div>
        </Container>
      </div>
    );
  }
}
