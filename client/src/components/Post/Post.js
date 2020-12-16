import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useUser from "../../userContext/useUser";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    dispaly: "flex",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card: {
    minWidth: "1000px",
  },
  cardHeader: {
    paddingLeft: theme.spacing(5),
    display: "flex",
    marginTop: "20px",
    marginLeft: "20px",
  },
  postHeader: {
    margin: theme.spacing(5.25, 0, 0, 2),
  },
  avatar: {
    marginTop: "20px",
    width: "50px",
    height: "50px",
  },
  name: {
    position: "relative",
    right: "131px",
  },
}));

export default function Post({ props }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.card}>
          <div className={classes.cardHeader}>
            <Avatar className={classes.avatar} />
            <h3 className={classes.postHeader}>category</h3>
            <h3 className={classes.postHeader}>title</h3>
            <h5 className={classes.name}>Chia Xiong</h5>
          </div>
        </div>
        <div>
          <p>Content goes here</p>
        </div>
      </div>
    </div>
  );
}
