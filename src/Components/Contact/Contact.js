import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div id="contact" style={{ background: "#FBD062" }} className="row contact">
      <div className="col-md-5 offset-md-1">
        <h1>Let us handle your project, professionally</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          iure modi ea dicta explicabo quibusdam quia necessitatibus
          perspiciatis iusto eligendi?
        </p>
      </div>
      <div className="contact__form col-md-6">
        <form action="">
          <input type="text" placeholder="Your Email Address" />
          <br />
          <input type="text" placeholder="Your Name / Company Name" />
          <br />
          <textarea placeholder="Your Message" rows="4" cols="50"></textarea>
          <br />
          <button className="btn btn-dark">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
