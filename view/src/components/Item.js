import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import BuildIcon from "@material-ui/icons/Build";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Link } from "react-router-dom";

const Item = ({ data, isControl }) => {
  const deleteCams = (id) => {
    console.log(id);
  };
  return (
    <Card className="card-box">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={data.image}
          title="Contemplative Reptile"
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
            <Button
              size="small"
              color="primary"
              variant="outlined"
              style={{ marginRight: 10 }}
            >
              <BuildIcon /> Sửa
            </Button>
            <Button
              onClick={() => deleteCams(data._id)}
              size="small"
              color="secondary"
              variant="outlined"
            >
              <HighlightOffIcon /> Xóa
            </Button>
          </div>
        ) : (
          <Button size="small" color="primary" variant="outlined">
            <FacebookIcon /> Chia sẻ
          </Button>
        )}
        <Button size="small" color="secondary">
          <Link className="route-link" to={`/campaign/${data._id}`}>
            Xem chương trình
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
