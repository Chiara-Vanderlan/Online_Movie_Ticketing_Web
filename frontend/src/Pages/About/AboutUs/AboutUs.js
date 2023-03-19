import React, { useState } from 'react';
import Header from '../../Header';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  }

  return (
    <div>
      <Header></Header>

      <div>
        <div>
      <h1>About Us</h1>
            <h2>Welcome to MOVIE CLUB!</h2>
            <p>We are dedicated to providing a convenient and enjoyable way for movie lovers to plan their next cinematic experience.Our website offers a wide selection of films from the latest blockbusters to indie films, and everything in between. We have a user-friendly interface and advanced search options to help you find the perfect film for you.</p>
            <p>With our online booking system, you can purchase tickets and select your seats with just a few clicks. You can also choose to pick up your tickets at the box office or have them delivered to you.We strive to provide exceptional customer service and a seamless booking experience. Our team is available to assist you with any questions or issues you may have.</p>
            <h2>Thank you for choosing our website. We hope you have a great time at the movies!</h2>
        </div>
      </div>

      <div>
        <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
            <button type="submit">Send</button>
          </form>
      </div>
    </div>
  );
}

export default ContactUs;
