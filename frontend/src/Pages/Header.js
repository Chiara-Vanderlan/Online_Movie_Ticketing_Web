import React, { useState } from "react";
import {Link} from 'react-router-dom'

export default function Header() {

    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    const handleSubmit = async (event) => {
       event.preventDefault();
     // backend
     const response = await fetch(`http://localhost:3001/movie/getAll?q=${searchTerm}`);
    const data = await response.json();
    setResults(data.results);
     //console.log(searchTerm);
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
        style={{ width: '400px', height: '35px' }}
        />
        <button type="submit" style={{ width: '80px', height: '40px' }}>Search</button>
        </form>

      <nav>
        <ul >
          <li ><Link to = "/" >Home   </Link></li>
          <li ><Link to = "/Movies">Movies </Link></li>
          <li><Link to = "/AboutUs">Contact Us   </Link></li>
          <li><Link to = "/Register">Register  </Link></li>
          <li><Link to = "/Login">Login   </Link></li>
          </ul>
      </nav>
    </header>
    </div>
  )
}
