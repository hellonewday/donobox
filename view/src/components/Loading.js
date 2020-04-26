import React, { Component } from "react";
import "../App.css";
class Loading extends Component {
  render() {
    return (
      <div class="loadingio-spinner-spinner-d5cq2cfxgia">
        <div class="ldio-0cz4s9lohex">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <h1 className="loading-text">
            {this.props.message ? "Loading..." : ""}
          </h1>
        </div>
      </div>
    );
  }
}

export default Loading;
