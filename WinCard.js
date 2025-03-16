import React from 'react';
import '../styles.css';

const WinCard = ({ win }) => {
  return (
    <div className="win-card">
      <h3>{win.title}</h3>
      <p>{win.description}</p>
      <small>Category: {win.category}</small><br />
      <small>{new Date(win.createdAt).toLocaleString()}</small>
    </div>
  );
};

export default WinCard;
