import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useFormik, Field } from "formik";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import { Switch } from "antd";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
    minWidth: "700px",
    position: "relative",
    bottom: "45px",
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
    border: "1px solid",
    fontWeight: "bold",
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
  const [limitToggle, setLimitToggle] = useState(false);
  const handleToggle = () => {
    limitToggle ? setLimitToggle(false) : setLimitToggle(true);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className={classes.cardHeader}>
            <Avatar className={classes.avatar} />
          </div>
          <div>
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
              <Grid item className={classes.inputField}>
                <label htmlFor="service">SERVICE</label>
                <label htmlFor="title">TITLE</label>
                <label htmlFor="location">LOCATION</label>
                <label htmlFor="limit">LIMIT</label>
                <label htmlFor="time">TIME</label>
                <label htmlFor="date">Date</label>
              </Grid>
              <Grid item className={classes.inputField}>
                <select
                  name="service"
                  id="service"
                  value={formik.values.service}
                  onChange={formik.handleChange}>
                  <option value="none" selected hidden>
                    --select service--
                  </option>
                  <option value="Looking For">Looking For</option>
                  <option value="Providing Service">Providing Service</option>
                </select>

                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  autoComplete="off"
                />
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  autoComplete="off"
                />
                <Switch
                  checkedChildren={"Yes"}
                  unCheckedChildren={"No"}
                  onClick={handleToggle}
                  autoComplete="off"
                />
                {limitToggle && (
                  <input
                    type="text"
                    name="limit"
                    id="limit"
                    value={formik.values.limit}
                    onChange={formik.handleChange}
                    autoComplete="off"
                  />
                )}
                <input
                  type="text"
                  name="time"
                  id="time"
                  value={formik.values.time}
                  onChange={formik.handleChange}
                  autoComplete="off"
                />
                <input
                  type="text"
                  name="date"
                  id="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  autoComplete="off"
                />
                <select
                  name="category"
                  id="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}>
                  <option value="none" selected hidden>
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
          </div>
        </div>
        <Button type="submit" onClick={() => onPostSubmit(formik)}>
          Post
        </Button>
      </form>
    </div>
  );
}
