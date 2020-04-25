import React, { Component } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import rice from "../img/rice.jpg";
import Typewriter from "typewriter-effect";
import "../App.css";

export default class SearchBar extends Component {
  render() {
    return (
      <div
        style={{
          background: `url('${rice}')`,
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
              className="search-input"
              fullWidth
              placeholder="Tìm kiếm chương trình hoặc thành phố bạn cần hỗ trợ"
              variant="outlined"
            />
            <Button
              style={{ top: 10, position: "absolute", right: 10 }}
              color="primary"
              variant="contained"
            >
              Tìm kiếm
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}
