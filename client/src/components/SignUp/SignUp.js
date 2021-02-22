import React, { useRef } from "react";
import { Link } from "@reach/router";
import axios from "axios";

export default function SignUp() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = async e => {
    e.preventDefault();
    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      console.log(formData);
      await axios.post("http://localhost:5000/api/auth/signup", formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Link to="/">
        <h1>Sofofiling</h1>
      </Link>

      <form onSubmit={onSubmit}>
        <label id="firstName">First Name</label>
        <input type="text" ref={firstNameRef} name="firstName" />

        <label id="lastName">Last Name </label>
        <input type="text" ref={lastNameRef} name="lastName" />

        <label id="email">Email</label>
        <input type="email" ref={emailRef} name="email" />

        <label id="password">Password </label>
        <input type="password" ref={passwordRef} name="password" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
