import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Switch } from "antd";
// import moment from "moment";

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
  inputField: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    marginRight: "50px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function PostForm({ onPostSubmit }) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      location: "",
      limit: "",
      category: "",
    },
    onSubmit: (values, { resetForm }) => {
      onPostSubmit(values);
      resetForm();
    },
  });
  const [limitToggle, setLimitToggle] = useState(false);
  const handleToggle = () => {
    limitToggle ? setLimitToggle(false) : setLimitToggle(true);
  };

  const categoryRef = useRef();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className={classes.cardHeader}>
            <Avatar className={classes.avatar} />
          </div>
          <div>
            <TextField
              type="text"
              name="content"
              id="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              className={classes.formField}
            />
            <Grid container>
              <Grid item className={classes.inputField}>
                <label htmlFor="title">TITLE</label>
                <label htmlFor="location">LOCATION</label>
                <label htmlFor="limit">LIMIT</label>
              </Grid>
              <Grid item className={classes.inputField}>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                />
                <Switch
                  checkedChildren={"Yes"}
                  unCheckedChildren={"No"}
                  onClick={handleToggle}
                />
                {limitToggle ? (
                  <input
                    type="text"
                    name="limit"
                    id="limit"
                    value={formik.values.limit}
                    onChange={formik.handleChange}
                  />
                ) : null}

                <FormControl className={classes.formControl}>
                  <InputLabel required>Category</InputLabel>
                  <Select
                    name="category"
                    id="category"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    inputRef={categoryRef}>
                    <MenuItem value="Art">Art</MenuItem>
                    <MenuItem value="Music">Music</MenuItem>
                    <MenuItem value="Code">Code</MenuItem>
                    <MenuItem value="Game">Game</MenuItem>
                    <MenuItem value="Cooking">Cooking</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </div>
        <Button type="submit" onClick={() => onPostSubmit(formik)}>
          Post
        </Button>
      </form>
    </div>
  );
}
