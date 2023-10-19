import React from 'react';
import './Cards.css'; // Import the CSS file for styling

function Card(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;