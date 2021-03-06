import React, { Component } from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import "../../App.css";
import friends from "../../img/friends.jpg";

class Contact extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "gainsboro", padding: 20 }}>
        <Container>
          <h1 style={{ textAlign: "center" }}>Đội ngũ Donobox</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              <img src={friends} alt="rice" style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12} lg={8}>
              <Paper className="contact-paper">
                <b>Fullstack Developer</b>: Nguyễn Quốc Hùng
                <p>+84 97 347 1728</p>
                <p>imbayonline@gmail.com</p>
              </Paper>
              <Paper className="contact-paper">
                <b>Front-end Developer</b>: Bảo
                <p>+84 97 347 1728</p>
                <p>imbayonline@gmail.com</p>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Contact;
