import React, { Component } from "react";
import DataSlider from "./DataSlider";
import divider from "../../img/divider.png";

class Popular extends Component {
  render() {
    return (
      <div style={{ margin: 30 }}>
        <h2 style={{ textAlign: "center", marginBottom: 6 }}>Chương trình hỗ trợ nổi bật</h2>{" "}
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
      </div>
    );
  }
}

export default Popular;
