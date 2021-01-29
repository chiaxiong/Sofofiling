import React, { useState } from "react";
import {
  Grid,
  Divider,
  Typography,
  Button,
  ListItemText,
  List,
  Link,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import useUser from "../../userContext/useUser";
import { navigate } from "@reach/router";
import SubCategory from "./SubCategory";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  buttonList: {
    display: "flex",
    flexDirection: "column",
  },
  trendingButton: {
    color: "#7E7B7B",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
    borderRadius: "50px",
    width: "200px",
    margin: theme.spacing(2, 0, 0, 2),
  },
  myButton: {
    color: "#7E7B7B",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
    borderRadius: "50px",
    width: "200px",
    margin: theme.spacing(2, 0, 0, 2),
    position: "relative",
    left: "40px",
  },
  sidebar: {
    backgroundColor: "#F5AB7C",
    height: "100%",
    width: "280px",
  },
  divider: {
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "-20px",
  },
}));

export default function SideBar(props) {
  const classes = useStyles();
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { subscribe, categoryHandler, unSub, userSubs } = props;

  const { user } = useUser();

  if (!user) navigate("/signin");

  const getCategory = category => {
    categoryHandler(category);
  };

  const subscribeToggle = category => {
    isSubscribed ? setIsSubscribed(false) : setIsSubscribed(true);
  };

  const removeSubs = category => {
    unSub(category);
    console.log("unsubscribed");
  };

  const addSubs = category => {
    subscribe(category);
    console.log("subscribed");
  };

  const categoryList = ["Art", "Music", "Code", "Game", "Cooking"];

  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <div className={classes.toolbar} />
        <Link href="/feed">
          <Typography>Sofofiling</Typography>
        </Link>
        <Divider className={classes.divider} />
        <Typography>Trending Categories</Typography>
        <List className={classes.buttonList}>
          {categoryList.map((category, index) => (
            <Button
              key={index}
              className={classes.trendingButton}
              onClick={() => getCategory(category)}>
              <ListItemText primary={category} />
              <Button
                onClick={() => removeSubs(category)}
                style={{ fontSize: ".2em" }}>
                unsubscribe
              </Button>
              <Button
                onClick={() => addSubs(category)}
                style={{ fontSize: ".2em" }}>
                subscribe
              </Button>
            </Button>
          ))}
        </List>
        <Divider className={classes.divider} />
        <Typography>Subscribe Categories</Typography>
        <SubCategory />
      </div>
    </div>
  );
}
