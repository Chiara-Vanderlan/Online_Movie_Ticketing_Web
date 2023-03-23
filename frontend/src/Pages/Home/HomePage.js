import React from "react";
import Header from '../Header';
import Image1 from "./Pissyinboot.jpeg"
import Image2 from "./avatar.webp"
import Image3 from "./R (10).jpeg"
import { useLocation, useNavigate } from "react-router-dom";

import './styles.css'

export default function HomePage() {
  const img1 = Image1;
  const img2 = Image2;
  const img3 = Image3;

  const location = useLocation()
  return (
    <div >
      <Header></Header>
  
    <main>
      
    
      <h1>WELCOME TO THE MOVIE CLUB</h1>
      <p >BOOK YOUR TICKETS ONLINE AND AVOID WAITING IN LINE.</p>
      <div >
        <div className="movie" >
          <img  src={img2} alt="" />
          <h2 >Avatar: The Way of Water</h2>
          <p>"Avatar: The Way of Water" is a science fiction film released in 2022, directed by James Cameron. The film is a sequel to the 2009 film "Avatar" and continues the story of the inhabitants of Pandora, a fictional, exotic world. The film features a blend of live-action and computer-generated imagery (CGI) to create a breathtaking and immersive world filled with diverse species and stunning landscapes.</p>
          <button>Book Tickets</button>
        </div>
        <div className="movie">
          <img src= {img1}  alt="" />
          <h2>Puss in Boots: The Last Wish</h2>
          <p>"Puss in Boots: The Last Wish" is a 2021 animated film in the "Puss in Boots" franchise. The film features an ensemble of colorful characters and a richly imagined world filled with magic, action, and humor. Puss in Boots must use his wit and bravery to overcome obstacles and ultimately achieve his goal, all while entertaining audiences with his charming personality and daring exploits.</p>
          <button>Book Tickets</button>
        </div>
        <div className="movie">
          <img  src={img3}  alt="" />
          <h2>Adaraneeya Prarthana</h2>
          <p>Adaraneeya Prarthana (Sinhala) is a 2022 romance musical directed by Wasawa Baduge and produced by Ishantha Withanage. The film revolves around Rahul, whose fate becomes entangled with the lives of Parami and Menaka. Starring Shanudrie Priyasad, Nethmi Roshel, and Rahul Warawitage as Menaka, Parami, and Rahul, respectively, the music is directed by Yasas Medagedara.</p>
          <button>Book Tickets</button>
        </div>
        
      </div>
    </main>
  </div>
  );
}
