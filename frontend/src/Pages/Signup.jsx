import React, { useState } from "react";
import "./CSS/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
  const [firstName, setfirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <div className="wlcmmsg">Hello There, Join US</div>
        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              placeholder="Enter Your First Name"
              autoComplete="off"
              name="firstname"
              onChange={(e) => setfirstName(e.target.value)}
            />

            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              autoComplete="off"
              name="lastname"
              onChange={(e) => setLastName(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email Address"
              autoComplete="off"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p className="loginsignup-login">
          Already have an account?{" "}
          <Link to="/login">
            <span>Login here</span>
          </Link>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Signup;
