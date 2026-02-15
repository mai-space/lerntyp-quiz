import { useState } from 'react';
import './NameInput.css';

function NameInput({ onSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="name-input-container">
      <div className="name-input-card">
        <h1>Willkommen zum Lerntyp-Quiz</h1>
        <p className="subtitle">
          Entdecke deinen individuellen Lerntyp und erhalte personalisierte Lerntipps!
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Dein Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Gib deinen Namen ein"
              required
              autoFocus
            />
          </div>
          
          <button type="submit" className="btn-primary" disabled={!name.trim()}>
            Quiz starten
          </button>
        </form>

        <div className="info-box">
          <h3>ℹ️ Hinweis</h3>
          <p>
            Dieses Quiz besteht aus 10 Fragen und dauert etwa 3-5 Minuten.
            Deine Antworten werden lokal gespeichert und können später verglichen werden.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NameInput;
