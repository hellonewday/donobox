import React, { Component } from "react";
import DataSlider from "./DataSlider";
import divider from "../../img/divider.png";
import Button from "@material-ui/core/Button";
import "../../App.css";
import Axios from "axios";
import Loading from "../Loading";

class Popular extends Component {
  state = {
    data: [],
    loading: true,
  };
  componentDidMount() {
    Axios.get(`https://donobox.herokuapp.com/api/campaigns?popular=8`)
      .then((response) => {
        this.setState({ loading: false });
        this.setState({ data: response.data.data });
      })
      .catch((error) => console.log(error.response));
  }
  render() {
    const { loading } = this.state;
    return (
      <div style={{ marginTop: 40 }}>
        <h2 style={{ textAlign: "center", marginBottom: 6 }}>
          Chương trình hỗ trợ nổi bật
        </h2>
        <img
          src={divider}
          alt="divider"
          style={{
            width: "30%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            marginBottom: 6,
          }}
        />
        {loading ? (
          <Loading message={false} />
        ) : (
          <DataSlider data={this.state.data} />
        )}
        <Button className="button-more">Xem thêm</Button>
      </div>
    );
  }
}

export default Popular;
