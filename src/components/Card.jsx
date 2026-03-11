import React from 'react';
import './style.css';

function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card__img" />
      <div className="card__overlay"></div>
      <h3 className="card__title">{title}</h3>
    </div>
  );
}

export default Card;