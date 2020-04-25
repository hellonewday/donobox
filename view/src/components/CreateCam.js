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

class CreateCam extends Component {
  render() {
    return (
      <Container>
        <h1>Đăng chiến dịch tài trợ của bạn</h1>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="standard-basic"
                variant="outlined"
                label="Tên chiến dịch"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Tóm tắt chiến dịch"
                variant="outlined"
              />
            </Grid>{" "}
            <br />
            <Grid item xs={12} lg={12} style={{ marginBottom: 20 }}>
              <CKEditor
                editor={ClassicEditor}
                data="<p>Mô tả chiến dịch của bạn!</p>"
                onInit={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
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
                  value={"Từ thiện"}
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
                <Select labelId="the-loai" id="the-loai" value={"Lương thực"}>
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
                <Select labelId="doi-tuong" id="doi-tuong" value={"Toàn quốc"}>
                  <MenuItem value={"Toàn quốc"}>Toàn quốc</MenuItem>
                  <MenuItem value={"Toàn cầu"}>Toàn cầu</MenuItem>
                  <MenuItem value={"Theo khu vực"}>Theo khu vực</MenuItem>
                  <MenuItem value={"Thành phó cụ thể"}>
                    Thành phó cụ thể
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid style={{ marginBottom: 20 }} item xs={12} lg={7}>
              <TextField
                fullWidth
                id="location"
                label="Chi tiết về địa điểm"
                variant="outlined"
              />
            </Grid>
            <Grid item sx={12} lg={6} style={{ marginBottom: 20 }}>
              <TextField
                fullWidth
                id="start_time"
                label="Thời gian bắt đầu"
                type="date"
                defaultValue={Date.now()}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item sx={12} lg={6}>
              <TextField
                fullWidth
                id="end_time"
                label="Thời gian kết thúc"
                type="date"
                defaultValue="2022-05-24"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <ButtonGroup fullWidth style={{ marginBottom: 20 }}>
            <Button  type="submit" color="secondary" variant="contained">
              Đăng
            </Button>
            <Button  color="default">Hủy đăng</Button>
          </ButtonGroup>
        </form>
      </Container>
    );
  }
}

export default CreateCam;
