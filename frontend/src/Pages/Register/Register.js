import React, { useState } from 'react';
import "./Register.css"
import Header from '../Header';
import {useNavigation,Link} from 'react-router-dom'
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3000/LRegister" ,{
        email, password
      }) 

    }
    catch(e){
        console.log(e);
    }
  }

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
      <h1>Register</h1>
      <form action='POST' >

        <div >
          <label>Email:</label>
          <input type="email"  onChange={(e)=>{setEmail(e.target.value)}}placeholder ="Email" />
        </div>
        <div>
          <label >Password:</label>
          <input type="password"  onChange={(e)=>{setPassword(e.target.value)}}placeholder ="Password" />
        </div>
        <input type = "Submit" onClick={submit}/>
        
        
        <br/>
        <p>OR </p>
        <br/>
        
        <Link to = "/Login">Login</Link>
      </form>
    </div>
  </div>

    
  );
};

export default Login;


