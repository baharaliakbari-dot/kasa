import React from 'react';
import Banner from '../components/Banner';

function About() {
  const imgUrl = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"; 

  return (
    <div className="about-container">
      <Banner image={imgUrl} text="" />
      <p>Page À Propos en test</p>
    </div>
  );
}

export default About;