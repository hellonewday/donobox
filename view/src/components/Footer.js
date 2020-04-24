import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "skyblue", padding: 20 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Typography variant="h6">
                <b>Tin tức</b>
              </Typography>
              <p>Về chúng tôi</p>
              <p>Dịch vụ</p>
              <p>Liên hệ</p>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">
                <b>Danh mục từ thiện và hỗ trợ</b>
              </Typography>
              <p>Kinh tế</p>
              <p>Lương thực</p>
              <p>Sản phẩm</p>
              <p>Việc làm</p>
              <p>Giáo dục</p>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6">
                <b>Quảng cáo</b>
              </Typography>
              <p>Tài trợ website</p>
              <p>Đội ngũ phát triển</p>
              <p>Cuộc thi Hackcovy</p>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Footer;
