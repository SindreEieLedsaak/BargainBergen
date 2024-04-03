import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faInfinity,
  faCheck,
  faShoppingCart,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import "./LoginPage.css";

const LoginPage = () => {
  const { login } = useKindeAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (event) => {
    event.preventDefault();
    // sign-in logic here
  };

  return (
    <div className="login-container">
      <div className="plan-info">
        <h2>Plan includes</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faInfinity} /> Unlimited item listings
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} /> Free forever
          </li>
          <li>
            <FontAwesomeIcon icon={faShoppingCart} /> Full access to sell and
            buy items
          </li>
          <li>
            <FontAwesomeIcon icon={faLightbulb} /> Pro tips for success
          </li>
        </ul>
      </div>
      <div className="login-form-container">
        <h1>Sign in</h1>
        <button
          className="oauth-button google"
          onClick={() =>
            login({
              authUrlParams: {
                connection_id: process.env.VITE_KINDE_CONNECTION_GOOGLE,
              },
            })
          }
        >
          <FontAwesomeIcon icon={faGoogle} /> Sign in using Google
        </button>
        <button className="oauth-button facebook"
        onClick={() =>
          login({
            authUrlParams: {
              connection_id: process.env.VITE_KINDE_CONNECTION_FACEBOOK,
            },
          })
        }>
          <FontAwesomeIcon icon={faFacebook} /> Sign in using Facebook
        </button>
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
          />
          <button
            type="submit"
            onClick={() =>
              login({
                authUrlParams: {
                  connection_id: process.env
                    .VITE_KINDE_CONNECTION_EMAIL_PASSWORD,
                  login_hint: email,
                },
              })
            }
          >
            Sign in with email
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
