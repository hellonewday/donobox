import React, { Component } from "react";
import DataSlider from "./DataSlider";
import divider from "../../img/divider.png";
import Button from "@material-ui/core/Button";
import "../../App.css";

class Popular extends Component {
  render() {
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
        <DataSlider />
        <Button className="button-more">Xem thêm</Button>
      </div>
    );
  }
}

export default Popular;
