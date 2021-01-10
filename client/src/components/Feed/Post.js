import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vh",
    display: "flex",
    marginLeft: "30px",
  },
  cardHeader: {
    flexDirection: "column",
  },
  avatar: {
    margin: theme.spacing(4, 0, 0, 4),
    width: "50px",
    height: "50px",
    backgroundColor: "#F5AB7C",
  },
  name: {
    padding: "0",
    marginLeft: "20px",
    marginTop: "14px",
  },
  formField: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    marginRight: theme.spacing(4),
  },
  card: {
    borderBottom: "1px solid black",
    paddingBottom: "40px",
  },
}));

export default function Post(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.card}>
        <Grid container className={classes.cardHeader}>
          <Grid container>
            <Grid item>
              <Avatar className={classes.avatar} />
            </Grid>
            <Grid className={classes.name}>
              <h4>
                {"user" in props
                  ? `${props.user.firstName} ${props.user.lastName}`
                  : "anoynomous"}
              </h4>
            </Grid>
            <Grid>
              <h4>{props.service}</h4>
            </Grid>
          </Grid>
          <Grid item className={classes.postHeader}>
            <h3>
              <span>{props.category}</span> <span>/</span>
              <span>{props.title}</span>
            </h3>
          </Grid>
        </Grid>

        <Grid>
          <p>{props.content}</p>
        </Grid>

        <Grid container>
          <Grid item className={classes.formField}>
            <h4>Location:</h4>
            <h4>Limit:</h4>
            <h4>Time:</h4>
            <h4>Date:</h4>
          </Grid>
          <Grid item className={classes.formField}>
            <p>{props.location}</p>
            <p>{props.limit}</p>
            <p>{props.time}</p>
            <p>{props.date}</p>
          </Grid>
        </Grid>
        <FormControl component="fieldset" className={classes.radioBtn}>
          <RadioGroup value={value} onChange={handleChange}>
            <FormControlLabel
              value="accept"
              control={<Radio />}
              label="Accept"
            />
            <FormControlLabel value="pass" control={<Radio />} label="Pass" />
          </RadioGroup>
        </FormControl>
      </Container>
    </div>
  );
}
