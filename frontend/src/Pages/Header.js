import React, { useState } from "react";
import {Link} from 'react-router-dom'

export default function Header() {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (event) => {
       event.preventDefault();
     // do something with the search term
     console.log(searchTerm);
     };
  
       const handleChange = (event) => {
       setSearchTerm(event.target.value);
      };

  return (
    <div>
     
    <header>
      <div className='logo' >MOVIE CLUB</div>

      <form >
        <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleChange}
        />
        <button type="submit">Search</button>
        </form>

      <nav>
        <ul >
          <li ><Link to = "/" >Home   </Link></li>
          <li ><Link to = "/AboutUs">About Us </Link></li>
          <li><Link to = "/AboutUs">Contact Us   </Link></li>
          <li><Link to = "/SignUp">SignIn   </Link></li>
          <li><Link to = "/Login">Login   </Link></li>
          </ul>
      </nav>
    </header>
    </div>
  )
}
