import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    dispaly: "flex",
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
  texbox: {
    minWidth: "650px",
    marginTop: "20px",
    position: "relative",
    bottom: "70px",
    right: "20px",
  },
  radioBtn: {
    display: "flex",
    direction: "row",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    marginRight: "50px",
    position: "relative",
    left: "120px",
    bottom: "50px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  label: {
    marginTop: "10px",
    fontWeight: "bold",
  },
  input: {
    marginTop: "10px",
    border: "none",
    borderBottom: "1px solid",
  },
}));

export default function PostForm({ onPostSubmit }) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      content: "",
      location: "",
      limit: "0",
      title: "",
      time: "",
      date: "",
      category: "",
      service: "",
    },
    onSubmit: (values, { resetForm }) => {
      onPostSubmit(values);
      resetForm();
    },
  });

  const [radio, setRadio] = useState("no");

  const [limitToggle, setLimitToggle] = useState(false);

  const handleOpen = () => {
    setLimitToggle(true);
  };
  const handleClose = () => {
    setLimitToggle(false);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <Grid className={classes.cardHeader}>
          <Avatar className={classes.avatar} />
        </Grid>
        <Grid>
          <TextField
            type="text"
            name="content"
            id="content"
            value={formik.values.content}
            onChange={formik.handleChange}
            className={classes.texbox}
            autoComplete="off"
            placeholder="How are you doing?"
            multiline
            rows="5"
          />
        </Grid>
        <Grid container>
          <Grid item className={classes.form}>
            <label htmlFor="service" className={classes.label}>
              SERVICE
            </label>
            <select
              name="service"
              id="service"
              value={formik.values.service}
              onChange={formik.handleChange}
              className={classes.input}>
              <option value="none" hidden>
                --select service--
              </option>
              <option value="Looking For">Looking For</option>
              <option value="Providing Service">Providing Service</option>
            </select>
            <label htmlFor="title" className={classes.label}>
              TITLE
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              autoComplete="off"
              className={classes.input}
            />
            <label htmlFor="location" className={classes.label}>
              LOCATION
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={formik.values.location}
              onChange={formik.handleChange}
              autoComplete="off"
              className={classes.input}
            />
          </Grid>

          <Grid item className={classes.form}>
            <label htmlFor="limit" className={classes.label}>
              LIMIT
            </label>
            <Grid container>
              <Grid item>
                <label htmlFor="yes">Yes</label>
                <input
                  type="radio"
                  id="yes"
                  name="yes"
                  value="yes"
                  checked={radio === "yes"}
                  onClick={handleOpen}
                  onChange={() => setRadio("yes")}
                />
              </Grid>
              <Grid>
                <label htmlFor="no">No</label>
                <input
                  type="radio"
                  id="no"
                  name="no"
                  value="no"
                  checked={radio === "no"}
                  onClick={handleClose}
                  onChange={() => setRadio("no")}
                />
              </Grid>
              <Grid>
                {limitToggle && (
                  <input
                    type="text"
                    name="limit"
                    id="limit"
                    value={formik.values.limit}
                    onChange={formik.handleChange}
                    autoComplete="off"
                    style={{
                      border: "none",
                      borderBottom: "1px solid",
                      marginLeft: "10px",
                      width: "45px",
                    }}
                  />
                )}
              </Grid>
            </Grid>

            <label htmlFor="time" className={classes.label}>
              TIME
            </label>
            <input
              type="text"
              name="time"
              id="time"
              value={formik.values.time}
              onChange={formik.handleChange}
              autoComplete="off"
              className={classes.input}
            />
            <label htmlFor="date" className={classes.label}>
              Date
            </label>
            <input
              type="text"
              name="date"
              id="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              autoComplete="off"
              className={classes.input}
            />
            <label className={classes.label}>Category</label>
            <select
              name="category"
              id="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              style={{
                marginTop: "10px",
                borderBottom: "1px solid black",
                border: "none",
              }}>
              <option value="none" hidden>
                Category
              </option>
              <option value="Art">Art</option>
              <option value="Music">Music</option>
              <option value="Code">Code</option>
              <option value="Game">Game</option>
              <option value="Cooking">Cooking</option>
            </select>
          </Grid>
        </Grid>
        <Button type="submit" onClick={() => onPostSubmit(formik)}>
          Post
        </Button>
      </form>
    </div>
  );
}
