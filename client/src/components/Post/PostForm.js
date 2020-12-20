import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import Grid from "@material-ui/core/Grid";

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
  avatar: {
    marginTop: "20px",
    width: "50px",
    height: "50px",
  },
  name: {
    marginLeft: "16px",
    fontSize: "1.5em",
    marginTop: "30px",
  },
  formField: {
    width: "100%",
  },
  radioBtn: {
    display: "flex",
    direction: "row",
  },
}));

export default function PostForm({ onPostSubmit }) {
  const classes = useStyles();
  const [post, setPost] = useState({
    content: "",
    title: "",
    location: "",
    limit: "",
  });

  const [selectedDate, setSelectedDate] = useState();

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  // const handleChange = event => {
  //   setValue(event.target.value);
  // };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={onPostSubmit}>
        <div>
          <div className={classes.cardHeader}>
            <Avatar className={classes.avatar} />
            <h5 className={classes.name}>Chia Xiong</h5>
          </div>
          <TextField
            placeholder="What's on your mind today?"
            className={classes.formField}
            multiline
            rows={5}
            name="content"
            value={post.content}
            onChange={handleChange}></TextField>
          <div>
            <div className={classes.inputField}>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                name="title"
                value={post.title}
                onChange={handleChange}></input>
              <label htmlFor="location">LOCATION</label>
              <input
                type="text"
                name="location"
                value={post.location}
                onChange={handleChange}></input>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                  <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <label htmlFor="limit">LIMIT</label>
              <input
                type="text"
                name="limit"
                value={post.limit}
                onChange={handleChange}></input>
            </div>
          </div>
          {/* <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}>
              Open Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div> */}
        </div>
        <Button onClick={() => onPostSubmit(post)}>Post</Button>
      </form>
    </div>
  );
}
