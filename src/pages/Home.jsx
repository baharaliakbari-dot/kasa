import React from 'react';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';

function Home() {
  const backupImage = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b";
  return (
    <>
      <Banner image={backupImage} text="Chez vous, partout et ailleurs" />
      <Gallery />
    </>
  );
}
export default Home;