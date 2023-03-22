import React, { useState } from 'react';
import Header from '../Header';
import "./Register.css"

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  return (
    <div>      
    <Header></Header>
    <div className="sign-up-form">
      <h2>Sign Up</h2>
      <form >
        <div className='label'>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        </div>

        <div>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        </div>

        <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        </div>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <div>
        <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Register;