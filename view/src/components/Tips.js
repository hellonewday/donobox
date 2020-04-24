import React, { Component } from "react";
import rice from "../img/rice.jpg";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import divider from "../img/divider2.png";
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
        <Container className="tips-container" >
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
                  Hãy ở nhà
                </Typography>
                <Typography gutterBottom variant="p">
                  Hãy ở nhà
                </Typography>
              </CardContent>
            </CardActionArea>

          </Card>{" "}
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
                  Hãy ở nhà
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
        <Container className="tips-container" >
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
                  Tìm các chương trình hỗ trợ khu vực
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" variant="outlined">
                <FacebookIcon /> Chia sẻ
              </Button>
              <Button size="small" color="secondary">
                Tìm hiểu thêm
              </Button>
            </CardActions>
          </Card>
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
                  Xem số liệu mới nhất về COVID - 19
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" variant="outlined">
                <FacebookIcon /> Chia sẻ
              </Button>
              <Button size="small" color="secondary">
                Tìm hiểu thêm
              </Button>
            </CardActions>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Tips;
