import React, { Component } from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Grid,
} from "@material-ui/core";
import Axios from "axios";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import "../App.css";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import divider from "../img/divider2.png";

class Detail extends Component {
  state = {
    data: [],
    comment: {},
  };
  componentDidMount() {
    Axios.get(
      `https://donobox.herokuapp.com/api/campaigns/${this.props.match.params.id}`
    )
      .then((response) => {
        this.setState({ data: response.data.data });
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  handleChange = (e) => {
    this.setState({
      comment: { ...this.state.comment, [e.target.name]: e.target.value },
    });
  };

  handleLike = () => {
    let likes = this.state.data.interactions.likes;
    let newLikes = likes + 1;

    let config = {
      headers: {
        "content-type": "application/json",
        Authorization: window.localStorage.getItem("token"),
      },
    };
    Axios.patch(
      `https://donobox.herokuapp.com/api/campaigns/${this.props.match.params.id}`,
      { likes: newLikes },
      config
    )
      .then((response) => {
        //    console.log(response);
        this.setState({
          data: {
            ...this.state.data,
            interactions: {
              ...this.state.data.interactions,
              likes: newLikes,
            },
          },
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  handleDislike = () => {
    let dislikes = this.state.data.interactions.dislikes;
    let newDislikes = dislikes + 1;

    let config = {
      headers: {
        "content-type": "application/json",
        Authorization: window.localStorage.getItem("token"),
      },
    };
    Axios.patch(
      `https://donobox.herokuapp.com/api/campaigns/${this.props.match.params.id}`,
      { dislikes: newDislikes },
      config
    )
      .then((response) => {
        //    console.log(response);
        this.setState({
          data: {
            ...this.state.data,
            interactions: {
              ...this.state.data.interactions,
              dislikes: newDislikes,
            },
          },
        });
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.comment);
    Axios.post(
      `https://donobox.herokuapp.com/api/campaigns/${this.props.match.params.id}/comments`,
      this.state.comment
    )
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  render() {
    const { data } = this.state;
    return (
      <Container>
        <div className="post-info">
          <div>
            {" "}
            <h1>{data.name}</h1>
            <Typography variant="h6">
              {data.summary} - <i>{data.time ? data.created_at : ""}</i>
            </Typography>
            {data.type ? (
              <div className="badge-info">
                <p className="badge type-badge">{data.type}</p>
                <p className="badge genre-badge">{data.genre}</p>
                <p className="badge location-badge">{data.segment}</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div style={{ marginTop: 20 }}>
            <Button
              className="social-button"
              color="primary"
              variant="contained"
            >
              <FacebookIcon style={{ marginRight: 10 }} /> Share
            </Button>
            <Button
              className="social-button"
              style={{ backgroundColor: "#2a80c7", color: "white" }}
              variant="contained"
            >
              <TwitterIcon style={{ marginRight: 10 }} /> Retweet
            </Button>
            <Button
              onClick={this.handleLike}
              className="interaction-button"
              style={{ borderColor: "green", color: "green" }}
              variant="outlined"
            >
              {data.interactions ? data.interactions.likes : ""}{" "}
              <ThumbUpAltIcon style={{ marginRight: 10 }} />
            </Button>
            <Button
              onClick={this.handleDislike}
              className="interaction-button"
              style={{ borderColor: "red", color: "red" }}
              variant="outlined"
            >
              {data.interactions ? data.interactions.dislikes : ""}{" "}
              <ThumbDownIcon style={{ marginRight: 10 }} />
            </Button>
          </div>
        </div>

        <img
          src={data.image}
          alt="image"
          style={{ width: "100%", margin: "10px 0px" }}
        />
        {data.host ? (
          <Link className="route-link" to={`/profile/${data.host._id}`}>
            {" "}
            <div className="user-info">
              <img src={data.host.avatarUrl} style={{ width: "100px" }} />
              <div class="info-text">
                <p>
                  {" "}
                  <b>Người đăng:</b> {data.host.name}
                </p>
                <p>
                  <b>Email:</b> {data.host.email}
                </p>
              </div>
            </div>
          </Link>
        ) : (
          ""
        )}
        <div style={{ fontSize: 20 }}>{ReactHtmlParser(data.description)}</div>

        <img src={divider} style={{ marginBottom: 10, width: "70%" }} />
        <div className="comments-part">
          <h2>Bình luận ({data.comments ? data.comments.length : "0"})</h2>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={6}>
              <TextField
                label="Tên"
                variant="outlined"
                fullWidth
                name="name"
                onChange={this.handleChange}
              />
            </Grid>{" "}
            <Grid item xs={12} xl={6}>
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                name="email"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} xl={12}>
              <TextField
                label="Nội dung"
                variant="outlined"
                fullWidth
                name="contents"
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>
          <Button onClick={this.handleSubmit}>Đăng</Button>
        </div>
        <div className="comments">
          {data.comments
            ? data.comments.map((item) => {
                return (
                  <div>
                    <div className="comment-item">
                      <Typography variant="h6">
                        <b>{item.name}</b>
                      </Typography>
                      <Typography variant="subtitle1">
                        {item.content}
                      </Typography>
                      <Typography variant="caption">
                        {item.created_at}
                      </Typography>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </Container>
    );
  }
}

export default Detail;
