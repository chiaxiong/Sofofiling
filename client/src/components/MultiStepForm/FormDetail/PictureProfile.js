import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: "#F5AB7C",
    position: "absolute",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
  },
  avatar: {
    padding: "0",
    margin: "0 auto",
    width: "270px",
    height: "270px",
    color: "#F5AB7C",
    cursor: "pointer",
  },
  message: {
    padding: "33px",
    margin: theme.spacing(0, 25, 0, 25),
    color: "#827F7F",
  },
  button: {
    position: "relative",
    bottom: "100px",
    border: "10px solid #F5AB7C",
    borderRadius: "50px",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
    fontSize: "25px",
    color: "#6DB5FD",
    margin: theme.spacing(0, 1, 0, 1),
    width: "200px",
  },
  form: {
    backgroundColor: "#fff",
    margin: theme.spacing(15, 50, 8, 50),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50px",
    minWidth: "500px",
    minHeight: "600px",
  },
}));

const Span = styled.span`
  margin: 0px;
  padding-bottom: 50px;
  cursor: pointer;
  padding: 0px;
`;

export default function PictureProfile({ nextStep, prevStep }) {
  const classes = useStyles();
  const [file, setFile] = useState();

  const forward = e => {
    e.preventDefault();
    nextStep();
  };

  const back = e => {
    e.preventDefault();
    prevStep();
  };

  const onAvatarSubmit = async e => {
    e.preventDefault();

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      axios.patch("http://localhost:5000/api/auth/user/avatar");
    } catch (error) {}
  };

  const onChangeImage = e => {
    setFile(e.target.files[0]);
    console.log("click");
  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={onAvatarSubmit}>
        <Typography variant="h5" className={classes.message}>
          Time for an upload! <br />
          We recommend a nice headshot so everyone can see who you are!
        </Typography>
        <AccountCircleIcon className={classes.avatar} />
        <input
          type="file"
          name="avatar"
          id="avatar"
          accept=".jpg, .png, .jpg"
          onChange={onChangeImage}
        />
        <Span onClick={forward} className={classes.skip}>
          Skip for now
        </Span>
      </form>
      <Button onClick={back} className={classes.button}>
        Back
      </Button>
      <Button type="submit" className={classes.button}>
        Submit
      </Button>
    </div>
  );
}
