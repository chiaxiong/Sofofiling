import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "date-fns";
import { useFormik, Field } from "formik";

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
    marginRight: "20px",
    marginLeft: "20px",
  },
  radioBtn: {
    display: "flex",
    direction: "row",
  },
}));

export default function PostForm({ onPostSubmit }) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      content: "",
      title: "",
      location: "",
      limit: "",
    },
    onSubmit: values => {
      onPostSubmit(values);
      console.log(values);
    },
  });

  console.log("Form values: ", formik.values);

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className={classes.cardHeader}>
            <Avatar className={classes.avatar} />
          </div>
          <div>
            <input
              type="text"
              name="content"
              id="content"
              value={formik.values.content}
              onChange={formik.handleChange}
            />
            <div className={classes.inputField}>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                name="title"
                id="title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              <label htmlFor="location">LOCATION</label>
              <input
                type="text"
                name="location"
                id="location"
                value={formik.values.location}
                onChange={formik.handleChange}
              />
              <label htmlFor="limit">LIMIT</label>
              <input
                type="text"
                name="limit"
                id="limit"
                value={formik.values.limit}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <Button type="submit" onClick={() => onPostSubmit(formik)}>
          Post
        </Button>
      </form>
    </div>
  );
}
