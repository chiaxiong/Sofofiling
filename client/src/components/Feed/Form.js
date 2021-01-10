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

export default function Form({ onPostSubmit }) {
  const classes = useStyles();
  const [form, setForm] = useState({
    content: "",
    location: "",
    limit: "0",
    title: "",
    time: "",
    date: "",
    category: "",
    service: "",
  });

  const handleForm = e => {
    e.preventDefault();
    setForm(form => ({ ...form, [e.target.name]: e.target.value }));
    console.log(e.target.value);
    console.log(form);
  };

  const [limitToggle, setLimitToggle] = useState(false);
  const handleToggle = () => {
    limitToggle ? setLimitToggle(false) : setLimitToggle(true);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={onPostSubmit}>
        <div>
          <div className={classes.cardHeader}>
            <Avatar className={classes.avatar} />
          </div>
          <div>
            <TextField
              type="text"
              name="content"
              id="content"
              value={form.content}
              onChange={handleForm}
              className={classes.formField}
              autoComplete="off"
            />
            <Grid container>
              <Grid item className={classes.inputField}>
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
                  value={form.service}
                  onChange={handleForm}>
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
                  value={form.title}
                  onChange={handleForm}
                  autoComplete="off"
                />
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={form.location}
                  onChange={handleForm}
                  autoComplete="off"
                />
                <Switch
                  checkedChildren={"Yes"}
                  unCheckedChildren={"No"}
                  onClick={handleToggle}
                  autoComplete="off"
                />
                {limitToggle ? (
                  <input
                    type="text"
                    name="limit"
                    id="limit"
                    value={form.limit}
                    onChange={handleForm}
                    autoComplete="off"
                  />
                ) : null}
                <input
                  type="text"
                  name="time"
                  id="time"
                  value={form.time}
                  onChange={handleForm}
                  autoComplete="off"
                />
                <input
                  type="text"
                  name="date"
                  id="date"
                  value={form.date}
                  onChange={handleForm}
                  autoComplete="off"
                />
                <select
                  name="category"
                  id="category"
                  value={form.category}
                  onChange={handleForm}>
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
        <Button type="submit">Post</Button>
      </form>
    </div>
  );
}
