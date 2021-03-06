import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core/";
import { Link } from "@reach/router";
import useUser from "../../userContext/useUser";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vh",
    display: "flex",
    marginLeft: "30px",
  },
  header: {
    textAlign: "left",
    padding: "0px",
    margin: "0px",
  },
  avatar: {
    margin: theme.spacing(4, 0, 0, 4),
    width: "50px",
    height: "50px",
    backgroundColor: "#F5AB7C",
  },
  list: {
    listStyleType: "none",
    textAlign: "left",
    fontWeight: "bold",
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(6),
  },
  formValue: {
    textAlign: "left",
    // marginLeft: theme.spacing(11),
  },
  card: {
    borderTop: "1px solid black",
    paddingBottom: "40px",
  },
  service: {
    color: "red",
    fontSize: ".8em",
    marginLeft: "10px",
  },
  name: {
    margin: "0px",
    position: "relative",
    top: "35px",
    left: "5px",
  },
  postBody: {
    textAlign: "left",
    marginLeft: theme.spacing(11),
  },
  delete: {},
}));

export default function Post(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const { user } = useUser;

  const handleRadio = event => {
    setValue(event.target.value);
  };

  const viewSinglePost = postId => {
    props.viewPost(postId);
  };

  const listInfo = ["LOCATION:", "LIMIT:", "TIME:", "DATE:"];
  const { location, limit, time, date } = props;
  const listValue = [location, limit, time, date];

  return (
    <div className={classes.root}>
      <Container className={classes.card}>
        <Grid container direction="row">
          <Grid item>
            <Avatar className={classes.avatar} />
          </Grid>
          <Grid item className={classes.header}>
            <h3 className={classes.name}>
              {"user" in props
                ? `${props.user.firstName} ${props.user.lastName}`
                : "anoynomous"}
              <span className={classes.service}>{props.service}</span>
            </h3>
            <h3 className={classes.name}>
              <span>{props.category}</span>{" "}
              <span style={{ color: "#F5AB7C" }}>||</span>
              <span style={{ paddingLeft: "5px" }}>{props.title}</span>
            </h3>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item className={classes.postBody}>
            <p>{props.content}</p>
          </Grid>
          <Grid container>
            <Grid item>
              {listInfo.map((listItem, index) => (
                <ul className={classes.list} key={index}>
                  <li>{listItem}</li>
                </ul>
              ))}
            </Grid>
            <Grid item className={classes.formValue}>
              {listValue.map((listOutput, index) => (
                <p key={index}>{listOutput}</p>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <FormControl component="fieldset" className={classes.radioBtn}>
              <RadioGroup value={value} onChange={handleRadio}>
                <FormControlLabel
                  value="accept"
                  control={<Radio />}
                  label="Accept"
                />
                <FormControlLabel
                  value="pass"
                  control={<Radio />}
                  label="Pass"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {props.activePost ? (
            <Grid item>
              <Button onClick={() => viewSinglePost(props._id)}>
                <Typography>View Post</Typography>
              </Button>
            </Grid>
          ) : (
            <Grid item>
              <Button onClick={props.prevState}>
                <Typography>Back</Typography>
              </Button>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}
