import React, { Component } from "react";
import Axios from "axios";
import moment from "moment";
import "moment/locale/vi";
import { Line } from "react-chartjs-2";
import Numbers from "./Numbers";
import { Container, Grid } from "@material-ui/core";
import SearchBar from "./Search";
import statistic from "../img/statistic.png";

moment.locale("vi");
export default class Chart extends Component {
  state = {
    confirmed: [],
    dates: [],
    recovered: [],
    updateConfirmed: [],
    updateRecovered: [],
  };
  componentDidMount() {
    Axios.get(
      "https://api.covid19api.com/dayone/country/vietnam/status/confirmed"
    )
      .then((response) => {
        function getConfirmed() {
          return Axios.get(
            `https://api.covid19api.com/dayone/country/vietnam/status/confirmed`
          );
        }
        function getRecovered() {
          return Axios.get(
            `https://api.covid19api.com/dayone/country/vietnam/status/recovered`
          );
        }

        return Axios.all([getRecovered(), getConfirmed()]);
      })
      .then((res) => {
        // console.log(res[0].data);
        let dates = res[0].data.map((item) => {
          return moment(item.Date).format("ll");
        });
        let recovered = res[0].data.map((item) => {
          return item.Cases;
        });
        let confirmed = res[1].data.map((item) => {
          return item.Cases;
        });
        let updateConfirmed = [];
        let updateRecovered = [];
        for (let i = 0; i < confirmed.length; i++) {
          if (i === 0) {
            updateConfirmed.push(confirmed[i]);
            updateRecovered.push(recovered[i]);
          } else {
            updateConfirmed[i] = confirmed[i] - confirmed[i - 1];
            updateRecovered[i] = recovered[i] - recovered[i - 1];
          }
        }
        console.log(updateConfirmed);
        console.log(confirmed);

        this.setState({
          dates,
          recovered,
          confirmed,
          updateConfirmed,
          updateRecovered,
        });

        console.log(this.state.confirmed[this.state.confirmed.length - 1]);
      });
  }
  render() {
    return (
      <div>
        <SearchBar image={statistic} />
        <Container>
          <div style={{ marginBottom: 20 }}>
            <Numbers
              confirmed={this.state.confirmed[this.state.confirmed.length - 1]}
              recovered={this.state.recovered[this.state.recovered.length - 1]}
            />
            <Grid container spacing={2}>
              <Grid item xs={12} xl={6}>
                <Line
                  width={200}
                  data={{
                    labels: this.state.dates,
                    datasets: [
                      {
                        label: "Tổng số ca mắc",
                        fill: false,
                        borderColor: "rgba(235, 0, 31,1)",
                        data: this.state.confirmed,
                        pointRadius: 1,
                        pointBorderWidth: 1,
                        pointBackgroundColor: "#fff",
                      },
                      {
                        label: "Số ca hồi phục",
                        fill: true,
                        lineTension: 0.5,
                        backgroundColor: "rgba(255, 187, 0, 0.4)",
                        borderColor: "#ffbb00",
                        pointRadius: 1,
                        pointBorderWidth: 1,
                        pointBackgroundColor: "#fff",
                        data: this.state.recovered,
                      },
                    ],
                  }}
                />
              </Grid>
              <Grid item xs={12} xl={6}>
                <Line
                  width={200}
                  data={{
                    labels: this.state.dates,
                    datasets: [
                      {
                        label: "Tổng số ca mắc trong ngày",
                        fill: false,
                        borderColor: "rgba(235, 0, 31,0.8)",
                        pointRadius: 1,
                        pointBorderWidth: 1,
                        pointBackgroundColor: "#fff",
                        data: this.state.updateConfirmed,
                      },
                      {
                        label: "Số ca hồi phục trong ngày",
                        fill: true,
                        lineTension: 0.5,
                        backgroundColor: "rgba(255, 187, 0, 0.4)",
                        pointRadius: 1,
                        pointBorderWidth: 1,
                        pointBackgroundColor: "#fff",
                        borderColor: "#ffbb00",
                        data: this.state.updateRecovered,
                      },
                    ],
                  }}
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}
