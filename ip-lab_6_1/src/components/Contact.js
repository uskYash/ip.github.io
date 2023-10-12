import React from 'react';

function Contact() {
  const handleContactClick = () => {
    alert('Contact button clicked');
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <p>Email: john.doe@example.com</p>
      <button onClick={handleContactClick}>Contact Me</button>
    </div>
  );
}

export default Contact;
