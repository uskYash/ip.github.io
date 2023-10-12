// Contact.js
import React from "react";

function Contact(props) {
  const { email, linkedin } = props;

  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>Email: {email}</p>
      <p>LinkedIn: {linkedin}</p>
    </div>
  );
}

export default Contact;
