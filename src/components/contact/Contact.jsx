import "./contact.scss";
import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's Connect!</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>sharmfernando33@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>
            No. 27, Skyline Apartments, De Alwis Place, Dehiwala, Colombo. Sri
            Lanka.
          </span>
        </div>
        <div className="item">
          <h2>Contact</h2>
          <span>+94768486777</span>
        </div>
      </div>
          <div className="formContainer">
              <form action="">
                  <input type="text" placeholder="Name" required/>
                  <input type="email" placeholder="Email" required/>
                  <textarea placeholder="Message" />
                  <button type="submit">Send</button>
              </form>
      </div>
    </div>
  );
};
export default Contact;
