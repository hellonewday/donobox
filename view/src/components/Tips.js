import React, { Component } from "react";
import rice from "../img/rice.jpg";
import { Container, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
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
        <Container>
          <Grid container spacing={2}>
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
                      Hãy ở nhà
                    </Typography>
                    <Typography gutterBottom variant="p">
                      Hãy ở nhà
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
                      Hãy ở nhà
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
                      Hãy ở nhà
                    </Typography>
                  </CardContent>
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
