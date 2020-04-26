import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Link } from "react-router-dom";
import Axios from "axios";

const Item = ({ data, isControl }) => {
  const deleteCams = (id) => {
    console.log(id);
    const configs = {
      headers: {
        Authorization: window.localStorage.getItem("token"),
      },
    };
    Axios.delete(`https://donobox.herokuapp.com/api/campaigns/${id}`, configs)
      .then((response) => {
        console.log(response.status);
        alert("Xóa thành công id " + id);
        window.location.reload();
      })
      .catch((error) => console.log(error.response));
  };
  return (
    <Card className="card-box">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={data.name}
          height="140"
          image={data.image}
          title={data.name}
          style={{ maxWidth: 400 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{
              overflow: "hidden",
              maxWidth: 300,
            }}
          >
            {data.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isControl ? (
          <div>
            {/* <Button
              size="small"
              color="primary"
              variant="outlined"
              style={{ marginRight: 10 }}
            >
              <BuildIcon /> Sửa
            </Button> */}
            <Button
              onClick={() => deleteCams(data.id)}
              size="small"
              color="secondary"
              variant="outlined"
            >
              <HighlightOffIcon /> Xóa
            </Button>
          </div>
        ) : (
          <Button size="small" color="primary" variant="outlined">
            <a
              target="_blank"
              rel="noopener noreferrer" 
              className="route-link"
              href={`https://www.facebook.com/sharer/sharer.php?u=http://donobox.me/donobox/campagin/${data.id}`}
            >
              {" "}
              <FacebookIcon style={{ fontSize: 18 }} /> Chia sẻ
            </a>
          </Button>
        )}
        <Button size="small" variant="contained" color="secondary">
          <Link className="route-link" to={`/campaign/${data.id}`}>
            Xem ngay
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
