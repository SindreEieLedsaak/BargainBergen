import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    // sign-in logic here
  };

  return (
    <div className="login-container">
      <div className="plan-info">
        <h2>Plan includes</h2>
        <ul>
          <li>Unlimited item listings</li>
          <li>Free forever</li>
          <li>Full access to sell and buy items</li>
          <li>Pro tips for successful</li>
        </ul>
      </div>
      <div className="login-form-container">
        <h1>Sign in</h1>
        <button className="oauth-button">Sign in using Google</button>
        <button className="oauth-button">Sign in using Apple</button>
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
