import React, { useState } from 'react';
import "./Login.css"
import Header from '../Header';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // backend
  };

  return (
  <div>
      <Header></Header>
    <div >
      <h1>Login</h1>
      <form onSubmit={handleSubmit} >
        <div >
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label  htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button  type="submit">Login</button>
      </form>
    </div>
  </div>

    
  );
};

export default Login;


