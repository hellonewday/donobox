import React, { Component } from "react";
import rice from "../../img/rice.jpg";
import donate from "../../img/donate.jpg";
import statistics from "../../img/statistic.png";
import stayhome from "../../img/stayhome.jpg";

import { Container, Grid, CardActions, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import divider from "../../img/divider2.png";
import { Link } from "react-router-dom";
class Tips extends Component {
  render() {
    return (
      <div style={{ marginTop: 40 }}>
        <h2 style={{ textAlign: "center", marginBottom: 6 }}>
          Những mẹo hữu dụng bảo vệ bản thân khỏi COVID-19
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
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <Card className="tips-box">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={stayhome}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Hãy ở nhà
                    </Typography>
                    <Typography gutterBottom variant="p">
                      Ở nhà là cách tốt nhất để tránh dịch mùa bệnh
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>{" "}
            </Grid>
            <Grid item lg={6}>
              <Card className="tips-box">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={rice}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Không mua đồ tích trữ
                    </Typography>
                    <Typography gutterBottom variant="p">
                      Mua đồ tích trữ khiến cho nguy cơ lây lan tăng đột biến
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={6}>
              <Card className="tips-box">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={donate}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Tham gia các chương trình hỗ trợ
                    </Typography>
                    <Typography gutterBottom variant="p">
                      Các chương trình từ thiện, hỗ trợ của chính phủ trong mùa
                      dịch
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="primary" variant="outlined">
                      <Link className="route-link" to="/campaigns">
                        Xem tất cả
                      </Link>
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={6}>
              <Card className="tips-box">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={statistics}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Theo dõi các số liệu COVID-19 mới nhất
                    </Typography>
                    <Typography gutterBottom variant="p">
                      Donobox cung cấp thông tin chính xác về COVID-19 tại Việt
                      Nam
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="secondary" variant="contained">
                      <Link className="route-link" to="/chart">
                        Xem ngay
                      </Link>
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Tips;
