import { useState } from 'react';
import './style.css';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <span className={`collapse__arrow ${isOpen ? 'open' : ''}`}>
          ⌄
        </span>
      </div>
      {isOpen && (
        <div className="collapse__content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;