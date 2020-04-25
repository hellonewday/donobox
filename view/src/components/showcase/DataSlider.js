import React, { Component } from "react";
import Slider from "react-slick";
import rice from "../../img/rice.jpg";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";
import Item from "../Item";

export default class DataSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };
    return (
      <Container fixed>
        <Slider {...settings}>
          {this.props.data
            ? this.props.data.map((item) => {
                return (
                  <div>
                    <Item data={item} isControl={false} />
                  </div>
                );
              })
            : ""}
        </Slider>
      </Container>
    );
  }
}
