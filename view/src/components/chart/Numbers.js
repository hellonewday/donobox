import AnimatedNumber from "animated-number-react";
import React from "react";
export default class App extends React.Component {
  state = {
    value: 4000,
  };
  formatValue = (value) => value.toFixed(0);

  render() {
    return (
      <div
        style={{
          marginTop: 50,
          display: "flex",
          justifyContent: "space-around",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 20,
          }}
        >
          <span
            style={{
              textAlign: "center",
              fontSize: 30,
              backgroundColor: "green",
              padding: 20,
              color: "white",
              borderRadius: "50%",
            }}
            className="balls"
          >
            <AnimatedNumber
              formatValue={this.formatValue}
              value={this.props.confirmed}
            />
          </span>
          Số ca bị nhiễm
        </div>{" "}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 20,
          }}
        >
          <span
            style={{
              textAlign: "center",
              fontSize: 30,
              backgroundColor: "teal",
              padding: 20,
              color: "white",
              borderRadius: "50%",
            }}
            className="balls"
          >
            <AnimatedNumber
              formatValue={this.formatValue}
              value={this.props.recovered}
            />
          </span>
          Số ca hồi phục
        </div>
      </div>
    );
  }
}
