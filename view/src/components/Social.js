import React, { Component } from "react";
import { Typography, Button, Container } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import "../App.css";

class Social extends Component {
  render() {
    return (
      <div className="social">
        <Typography variant="h4" style={{ textAlign: "center" }}>
          Tham gia vào mạng xã hội cùng Donobox
        </Typography>
        <Container className="social-block">
          <Button className="social-button" color="primary" variant="contained">
            <FacebookIcon style={{ marginRight: 10 }} /> Facebook
          </Button>
          <Button
            className="social-button"
            color="secondary"
            variant="contained"
          >
            <YouTubeIcon style={{ marginRight: 10 }} /> YouTube
          </Button>
          <Button
            className="social-button"
            style={{ backgroundColor: "#2a80c7", color: "white" }}
            variant="contained"
          >
            <TwitterIcon style={{ marginRight: 10 }} /> Twitter
          </Button>
          <Button
            className="social-button"
            style={{ backgroundColor: "#7d6b41", color: "white" }}
            variant="contained"
          >
            <InstagramIcon style={{ marginRight: 10 }} /> Instagram
          </Button>
        </Container>
      </div>
    );
  }
}

export default Social;
