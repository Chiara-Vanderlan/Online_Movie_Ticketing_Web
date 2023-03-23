import React, { useState } from 'react';
import Header from '../Header';
import {useHistory,Link} from 'react-router-dom'
import axios from "axios"
import "./Register.css"

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();
  
  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/Register" ,{
        firstName, lastName, email, password, confirmPassword
      }) 

      history.push("/Login");

    }
    catch(e){
        console.log(e);
    }
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // backend
  };

  return (
    <div>
      <Header></Header>
      <div className='Login'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={handleFirstNameChange} placeholder="First Name" />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={handleLastNameChange} placeholder="Last Name" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm Password" />
          </div>
          <input type="submit" onClick={submit}/>
          
          <br/>
          <p>OR </p>
          <br/>
          
          <Link to = "/Login">Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;