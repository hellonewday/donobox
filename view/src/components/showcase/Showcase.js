import React, { Component } from "react";
import SearchBar from "../Search";
import divider from "../../img/divider.png";
import {
  Container,
  Grid,
  TextField,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import "../../App.css";
import Axios from "axios";
import Item from "../Item";

class Showcase extends Component {
  state = {
    filter: "male",
    data: [],
  };
  handleFilter = (event) => {
    this.setState({ filter: event.target.value });
    console.log(event.target.name);
    console.log(event.target.value);
    Axios.get(
      `https://donobox.herokuapp.com/api/campaigns?${event.target.name}=${event.target.value}`
    )
      .then((response) => this.setState({ data: response.data.data }))
      .catch((error) => console.log(error));
  };

  handleLocation = (event) => {
    Axios.get(
      `https://donobox.herokuapp.com/api/campaigns?city=${event.target.value}`
    )
      .then((response) => this.setState({ data: response.data.data }))
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    Axios.get(`https://donobox.herokuapp.com/api/campaigns`)
      .then((response) => this.setState({ data: response.data.data }))
      .catch((error) => console.log(error.response));
  }
  render() {
    return (
      <div>
        <SearchBar />
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={3} lg={4}>
              <h2 style={{ marginBottom: 6 }}>Bộ lọc</h2>
              <img
                src={divider}
                alt="divider"
                style={{
                  display: "block",
                  marginLeft: -15,
                  marginRight: "auto",
                  width: "70%",
                }}
              />
              <br />
              <div className="search-city">
                <TextField
                  label="Tìm theo thành phố"
                  name="location"
                  onChange={this.handleLocation}
                  variant="outlined"
                />
              </div>
              <img
                src={divider}
                alt="divider"
                style={{
                  display: "block",
                  marginLeft: -15,
                  marginRight: "auto",
                  width: "70%",
                }}
              />
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={this.state.filter}
                onChange={this.handleFilter}
              >
                <h3>Theo thời gian</h3>
                <FormControlLabel
                  value="1"
                  name="end"
                  control={<Radio />}
                  label="Mới nhất"
                />
                <FormControlLabel
                  name="end"
                  value="-1"
                  control={<Radio />}
                  label="Cũ nhất"
                />
                <FormControlLabel
                  value={`${this.state.data.length}`}
                  name="popular"
                  control={<Radio />}
                  label="Phổ biến nhất"
                />
                <br />
                <img
                  src={divider}
                  alt="divider"
                  style={{
                    display: "block",
                    marginLeft: -15,
                    marginRight: "auto",
                    width: "70%",
                  }}
                />
                <h3>Theo thể loại</h3>
                <FormControlLabel
                  value="Giáo dục"
                  name="genre"
                  control={<Radio />}
                  label="Giáo dục"
                />
                <FormControlLabel
                  value="Lương thực"
                  name="genre"
                  control={<Radio />}
                  label="Lương thực"
                />
                <FormControlLabel
                  value="Kinh tế"
                  name="genre"
                  control={<Radio />}
                  label="Kinh tế"
                />
                <FormControlLabel
                  value="Việc làm"
                  name="genre"
                  control={<Radio />}
                  label="Việc làm"
                />
                <FormControlLabel
                  value="Sản phẩm"
                  name="genre"
                  control={<Radio />}
                  label="Sản phẩm"
                />
                <h3>Theo danh mục</h3>
                <FormControlLabel
                  value="Từ thiện"
                  name="type"
                  control={<Radio />}
                  label="Chương trình từ thiện"
                />
                <FormControlLabel
                  value="Hỗ trợ nhà nước"
                  name="type"
                  control={<Radio />}
                  label="Chương trình chính phủ"
                />
              </RadioGroup>
              <br />
            </Grid>
            <Grid
              container
              xs={12}
              xl={9}
              lg={8}
              spacing={3}
              style={{ marginBottom: 20, marginTop: 20 }}
            >
              {this.state.data.length > 0 ? (
                this.state.data.map((item) => {
                  return (
                    <Grid item xs={12} xl={4} lg={4}>
                      <Item data={item} isControl={false} />
                    </Grid>
                  );
                })
              ) : (
                <h2 style={{ textAlign: "center" }}>Không tìm thấy sản phẩm</h2>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Showcase;
