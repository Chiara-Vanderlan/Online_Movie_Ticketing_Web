import React, { useState } from "react";

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
          <li ><a href="#">Home   </a></li>
          <li ><a href="#">Movies   </a></li>
          <li><a href="#">Contact   </a></li>
          <li><a href="#">About   </a></li>
          <li><a href="#">Login   </a></li>
          </ul>
      </nav>
    </header>
    </div>
  )
}
