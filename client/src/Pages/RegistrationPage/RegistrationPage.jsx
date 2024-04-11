import React, { useState } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import "./RegistrationPage.css";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { register } = useKindeAuth();

  const handleSignUp = (event) => {
    event.preventDefault();
  };
  return (
    <div className="registration-container">
      <div className="registration-form">
        <h1>Welcome!</h1>
        <p>Sign up to start buying and selling used items with ease.</p>
        <form onSubmit={handleSignUp}>
          {/* <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          /> */}
          {/* <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          /> */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <button
            type="submit"
            className="signup-btn"
            onClick={() =>
              register({
                authUrlParams: {
                  connection_id: process.env
                    .VITE_KINDE_CONNECTION_EMAIL_PASSWORD,
                  login_hint: email,
                },
              })
            }
          >
            Sign Up
          </button>
        </form>
        <div className="separator">or continue with</div>
        <div className="social-login-buttons">
          <button
            className="google-btn"
            onClick={() =>
              register({
                authUrlParams: {
                  connection_id: process.env.VITE_KINDE_CONNECTION_GOOGLE,
                },
              })
            }
          >
            Google
          </button>
          <button
          className="facebook-btn"
          onClick={() =>
            register({
              authUrlParams: {
                connection_id: process.env.VITE_KINDE_CONNECTION_FACEBOOK,
              },
            })
          }>Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
