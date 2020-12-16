import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import useUser from "../../userContext/useUser";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    dispaly: "flex",
    backgroundColor: "#eee",
    marginLeft: "30px",
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

  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

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
      </div>
    </div>
  );
}
