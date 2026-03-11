import React from 'react';
import './style.css';

function Footer() {
    return (
        <footer className="footer" style={{ 
            backgroundColor: 'black', 
            padding: '60px 0', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            marginTop: 'auto' 
        }}>
            {/* Utilise ici le logo blanc de Kasa si tu l'as */}
            <h2 style={{ color: 'white', marginBottom: '20px' }}>KASA</h2>
            <p style={{ color: 'white' }}>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;