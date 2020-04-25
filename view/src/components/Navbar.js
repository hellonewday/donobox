import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import Fade from "@material-ui/core/Fade";

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
}));

export default function Nabar() {
  const classes = useStyles();
  const [isUser, setUser] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {}, []);
  return (
    <div className={classes.root}>
      <AppBar
        position="sticky"
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid gainsboro",
        }}
      >
        <Toolbar>
          <img width={60} style={{ padding: 10 }} src={logo} alt="logo" />
          <Typography variant="h5" className={classes.title}>
            <Link className="route-link" to="/">
              Donobox{" "}
            </Link>
          </Typography>
          <div style={{ display: "flex" }} className="menu">
            <Typography variant="h6" className="menu-item">
              <Link className="route-link" to="/campaigns">
                Chương trình{" "}
              </Link>
            </Typography>
            <Typography variant="h6" className="menu-item">
              <Link className="route-link" to="/covid">
                COVID-19
              </Link>
            </Typography>
            <Typography variant="h6" className="menu-item">
              <Link className="route-link" to="/contact">
                Về chúng tôi
              </Link>
            </Typography>
            {isUser ? (
              <div>
                <Typography variant="h6" className="menu-item">
                  <Link className="route-link" onClick={handleClick}>
                    Maximusss
                  </Link>
                </Typography>
                <Menu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                  className="menu-dropdown"
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Trang cá nhân" />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <DraftsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Chỉnh sửa thông tin" />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <InboxIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Đăng xuất" />
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              ""
            )}
            <Button variant="contained" className="button-search">
              <Link className="route-link" to={isUser ? "/create" : "/auth"}>
                Đăng ký tài trợ
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
