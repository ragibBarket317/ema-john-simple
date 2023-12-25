import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { createUserWithLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password, confirm);
    setError("");
    createUserWithLogin(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="user-form">
      <div className="form-content">
        <h2>Please Login</h2>
        <div className="error-msg">
          <p>{error}</p>
        </div>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>

          <div>
            <button>Login</button>
          </div>
          <div className="toggle-text">
            New to this website? please <Link to="/signup">Signup.</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
