import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../img/logo.png";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "black",
    letterSpacing: 3,
    fontWeight: 600,
  },
  button: {
    background: "linear-gradient(#4ea2e3,#1684d9)",
    color: "white",
    fontWeight: 600,
    padding: 10,
    margin: 10,
  },
}));

export default function Nabar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid gainsboro",
        }}
        position="static"
      >
        <Toolbar>
          <img width={60} style={{ padding: 10 }} src={logo} alt="logo" />
          <Typography variant="h5" className={classes.title}>
            Donobox
          </Typography>
          <div style={{ display: "flex" }} className="menu">
            <Typography variant="h6" className="menu-item">
              Các chương trình
            </Typography>
            <Typography variant="h6" className="menu-item">
              Về chúng tôi
            </Typography>
            <Button variant="contained" className={classes.button}>
              Become a donor
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
