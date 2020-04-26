import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "@material-ui/core";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";
import Item from "./Item";

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
