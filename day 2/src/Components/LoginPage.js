import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log('Username:', username);
    console.log('Password:', password);

    
    setUsername('');
    setPassword('');
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  return (
<div className="pp">
<div className="login-container">
    <div className="login-box-container"></div>
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
          </form>
          {!showRegister && (
          <p className="register-prompt">
            Don't have an account?
            {' '}
            <br></br>
            <button onClick={handleRegisterClick}>Register</button>
          </p>
         )}
          {showRegister && (
          <div className="register-area">
            <h3>Register</h3>
            {}
        </div>
        )}
        
    </div>
    </div>
    </div>
  );
};


export default LoginPage;
