import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  cardHeader: {
    paddingLeft: theme.spacing(5),
    display: "flex",
    marginTop: "20px",
    marginLeft: "20px",
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

export default function EditDialog({ postTitle, postId, updatePost }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [radio, setRadio] = useState("no");

  const [limitToggle, setLimitToggle] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editPost = postId => {
    updatePost(postId);
  };

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
      // onPostSubmit(values);
      resetForm();
    },
  });

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit Post
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          Edit Post: {postTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <form>
              <Grid>
                <TextField
                  type="text"
                  name="content"
                  id="content"
                  value={formik.values.content}
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
                        checked={radio === "yes"}
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
                    autoComplete="off"
                    className={classes.input}
                  />
                  <label className={classes.label}>Category</label>
                  <select
                    name="category"
                    id="category"
                    value={formik.values.category}
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
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => editPost(postId)} color="primary" autoFocus>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
