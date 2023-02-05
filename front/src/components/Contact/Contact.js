import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <h2 id="contact" >CONTACT</h2>
      <p id="insta">usueer98@gmail.com | Instagram: @URWLOVE</p>
      <form action=''>
      <label for="Name" className="Name">Name:</label><input type="text" className="Namee" placeholder="Name"/>
      <label for="Email">Email:</label><input type="email" id="Email" placeholder="Email"/>
      <label for="Phone">Phone:</label><input type="number" id="Phone" placeholder="Phone"/>
      <label for="Image">Image:</label><input type="file" id="Image" placeholder="Image"/>
      <label for="msg">Mensaje:</label><textarea id="msg" name="user_message"></textarea>
      <input type="submit" id="submit"></input>
      </form>
    </div>
  )
}

export default Contact
