import React, { useContext, useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Signup = () => {
  const [error, setError] = useState("");
  const { createUserWithSignup } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    console.log(email, password, confirm);

    if (password !== confirm) {
      setError("Password did not mutch. Try again.");
    }
    if (password.length < 6) {
      setError("Password must be greater than 6 Characters.");
    }

    if (password === confirm && password.length >= 6) {
      setError("");
    }

    createUserWithSignup(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="user-form">
      <div className="form-content">
        <h2>Please Sign Up</h2>
        <div className="error-msg">
          <p>{error}</p>
        </div>
        <form onSubmit={handleSignUp}>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <label htmlFor="confirm">Confirm Password:</label>
            <input type="password" id="confirm" name="confirm" required />
          </div>
          <div>
            <button>Sign Up</button>
          </div>
          <div className="toggle-text">
            Already have an Account? please <Link to="/login">Login.</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
