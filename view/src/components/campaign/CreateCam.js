import React, { Component } from "react";
import {
  TextField,
  Grid,
  Container,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Typewriter from "typewriter-effect";
import Axios from "axios";
import karma from "../../img/karma.jpg";

class CreateCam extends Component {
  state = {};

  handleFileChange = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let fd = new FormData();
    fd.append("name", this.state.name);
    fd.append("summary", this.state.summary);
    fd.append("campaign_type", this.state.campaign_type);
    fd.append("genre", this.state.genre);
    fd.append("end_time", this.state.end_time);
    fd.append("location_type", this.state.location_type);
    fd.append("location", this.state.location || "");
    fd.append("description", this.state.description);
    fd.append("picture", this.state.picture);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: window.localStorage.getItem("token"),
      },
    };
    console.log(fd);
    Axios.post("https://donobox.herokuapp.com/api/campaigns", fd, config)
      .then((response) => {
        if (response.data.success) alert("Đăng chiến dịch thành công. ");
        window.location.replace("/donobox/campaigns");
      })
      .catch((error) => {
        console.log(error.response);
        if (!error.response.data.success) alert("Đã có lỗi xảy ra");
      });
  };
  render() {
    return (
      <Container>
        <div className="interactive-create-ui">
          <h1 className="create-cam-title">
            <Typewriter
              options={{
                strings: [
                  "Đăng chiến dịch của bạn",
                  "Hãy sáng tạo",
                  "Hãy thật nổi bật",
                  "Hãy thật có ích",
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 100,
              }}
            />
          </h1>
          <img src={karma} style={{ width: "100%", marginBottom: 20 }} />
        </div>

        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="standard-basic"
                name="name"
                onChange={this.handleChange}
                variant="outlined"
                label="Tên chiến dịch"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Tóm tắt chiến dịch"
                onChange={this.handleChange}
                name="summary"
                variant="outlined"
              />
            </Grid>{" "}
            <br />
            <Grid item xs={12} lg={12} style={{ marginBottom: 20 }}>
              <CKEditor
                editor={ClassicEditor}
                name="description"
                data=""
                onInit={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  this.setState({ description: data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </Grid>
            <br />
            <Grid item xs={8} lg={3}>
              <input
                style={{
                  padding: 20,
                  border: "1px solid gainsboro",
                  marginBottom: 10,
                }}
                type="file"
                name="picture"
                onChange={this.handleFileChange}
              />
            </Grid>
            <Grid item xs={8} lg={4}>
              <FormControl
                style={{
                  minWidth: 350,
                }}
              >
                <InputLabel id="loai-chien-dich">Loại chiến dịch</InputLabel>
                <Select
                  labelId="loai-chien-dich"
                  id="loai-chien-dich"
                  value={this.state.campaign_type || ""}
                  name="campaign_type"
                  onChange={this.handleChange}
                >
                  <MenuItem value={"Từ thiện"}>Từ thiện</MenuItem>
                  <MenuItem value={"Hỗ trợ nhà nước"}>
                    Hỗ trợ chính phủ
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={8} lg={5}>
              <FormControl
                style={{
                  minWidth: 350,
                }}
              >
                <InputLabel id="the-loai">Giá trị hỗ trợ</InputLabel>
                <Select
                  labelId="the-loai"
                  id="the-loai"
                  value={this.state.genre || ""}
                  name="genre"
                  onChange={this.handleChange}
                >
                  <MenuItem value={"Lương thực"}>Lương thực</MenuItem>
                  <MenuItem value={"Giáo dục"}>Giáo dục</MenuItem>
                  <MenuItem value={"Việc làm"}>Việc làm</MenuItem>
                  <MenuItem value={"Sản phẩm"}>Sản phẩm</MenuItem>
                  <MenuItem value={"Kinh tế"}>Kinh tế</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={8} lg={5}>
              <FormControl
                style={{
                  minWidth: 350,
                }}
              >
                <InputLabel id="doi-tuong">Đối tượng hướng tới</InputLabel>
                <Select
                  fullWidth
                  value={this.state.location_type || ""}
                  name="location_type"
                  onChange={this.handleChange}
                  labelId="doi-tuong"
                  id="doi-tuong"
                >
                  <MenuItem value={"Toàn quốc"}>Toàn quốc</MenuItem>
                  <MenuItem value={"Toàn cầu"}>Toàn cầu</MenuItem>
                  <MenuItem value={"Theo khu vực"}>Theo khu vực</MenuItem>
                  <MenuItem value={"Thành phố"}>Thành phó cụ thể</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid style={{ marginBottom: 20 }} item xs={12} lg={7}>
              <TextField
                fullWidth
                id="location"
                label="Chi tiết về địa điểm"
                variant="outlined"
                name="location"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item sx={12} lg={6} style={{ marginBottom: 20 }}>
              <TextField
                fullWidth
                name="start_time"
                id="start_time"
                label="Thời gian bắt đầu"
                type="date"
                defaultValue={Date.now()}
                onChange={this.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item sx={12} lg={6}>
              <TextField
                fullWidth
                name="end_time"
                label="Thời gian kết thúc"
                type="date"
                defaultValue="2022-05-24"
                onChange={this.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <ButtonGroup fullWidth style={{ marginBottom: 20 }}>
            <Button
              onClick={this.handleSubmit}
              color="secondary"
              variant="contained"
            >
              Đăng
            </Button>
            <Button color="default">Hủy đăng</Button>
          </ButtonGroup>
        </form>
      </Container>
    );
  }
}

export default CreateCam;
