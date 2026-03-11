import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // <--- AJOUTE CETTE LIGNE
import Home from './pages/Home';
import About from './pages/About'; // <--- RETIRE LE .JSX ICI
import './App.css';

function App() {
  // const backupImage = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"; // Optionnel

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Le Header est commun à toutes les pages */}
      <Header />

      <main style={{ flex: '1' }}>
        <Routes>
          {/* Page d'Accueil */}
          <Route path="/" element={<Home />} />

          {/* Page À Propos */}
          <Route path="/about" element={<About />} />

          {/* Page 404 - Si l'adresse n'existe pas */}
          <Route path="*" element={
            <div style={{textAlign: 'center', marginTop: '50px'}}>
              <h1>404</h1>
              <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
          } />
        </Routes>
      </main>

      {/* Le Footer est aussi présent partout */}
      <Footer />
    </div>
  );
}

export default App;