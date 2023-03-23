import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data);
      // handle successful login
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
       <Header></Header>
       <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};

export default Login;





