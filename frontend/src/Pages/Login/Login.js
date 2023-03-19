import React, { useState } from 'react';
import "./Login.css"


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
    // Add logic to submit login credentials
  };

  return (
    <div>
    <div>
    <header>
      <div className='logo' >MOVIE CLUB</div>
      <nav>
        <ul >
          <li ><a href="#">Home   </a></li>
          <li ><a href="#">Movies   </a></li>
          <li><a href="#">Contact   </a></li>
          <li><a href="#">About   </a></li>
          <li><a href="#">Login   </a></li>
          </ul>
      </nav>
    </header>
    </div>

    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
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


