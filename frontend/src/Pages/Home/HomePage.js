import React from 'react'
import './styles.css'


export default function HomePage() {
  return (
    <div >
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
    <main>
      <h1>WELCOME TO THE MOVIE CLUB</h1>
      <p >Book your tickets online and avoid waiting in line.</p>
      <div >
        <div >
          <img src="https://via.placeholder.com/250x250" alt="Movie Poster" />
          <h2 >The Avengers</h2>
          <p>Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.</p>
          <button>Book Tickets</button>
        </div>
        <div >
          <img src="https://via.placeholder.com/250x250" alt="Movie Poster" />
          <h2>Star Wars: The Force Awakens</h2>
          <p>Three decades after the Empire's defeat, a new threat arises in the militant First Order. Stormtrooper defector Finn and spare parts scavenger Rey are caught up in the Resistance's search for the missing Luke Skywalker.</p>
          <button>Book Tickets</button>
        </div>
        <div >
          <img src="https://via.placeholder.com/250x250" alt="Movie Poster" />
          <h2>Jurassic Park</h2>
          <p>During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.</p>
          <button>Book Tickets</button>
        </div>
        <div >
          <img src="https://via.placeholder.com/250x250" alt="Movie Poster" />
          <h2>The Godfather</h2>
          <p>The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.</p>
          <button>Book Tickets</button>
        </div>
      </div>
    </main>
  </div>
  );
}
