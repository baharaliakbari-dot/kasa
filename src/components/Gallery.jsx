import React from 'react';
import Card from './Card';
import data from '../data/logements.json';
import './style.css';

function Gallery() {
  return (
    <section className="gallery">
      {data.map((item) => (
        <Card 
          key={item.id} 
          id={item.id} 
          title={item.title} 
          cover={item.cover} 
        />
      ))}
    </section>
  );
}

export default Gallery;