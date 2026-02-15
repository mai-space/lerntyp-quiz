import { learningTypes } from '../data/quizData';
import './Result.css';

function Result({ name, result, differences, onExport, onRestart }) {
  const learningType = learningTypes[result.dominantType];
  
  // Calculate percentages
  const percentages = {};
  Object.keys(result.scores).forEach(type => {
    percentages[type] = Math.round((result.scores[type] / result.totalQuestions) * 100);
  });

  return (
    <div className="result-container">
      <div className="result-card">
        <div className="result-header">
          <h1>🎉 Glückwunsch, {name}!</h1>
          <p className="result-subtitle">Dein Quiz ist abgeschlossen</p>
        </div>

        <div className="result-main">
          <div className="learning-type-badge">
            <h2>{learningType.name}</h2>
          </div>
          
          <p className="learning-description">{learningType.description}</p>

          <div className="scores-section">
            <h3>Deine Lerntyp-Verteilung:</h3>
            <div className="scores-chart">
              {Object.entries(result.scores).map(([type, score]) => (
                <div key={type} className="score-bar-container">
                  <div className="score-label">
                    <span className="score-name">{learningTypes[type].name.split(' ')[0]}</span>
                    <span className="score-value">{percentages[type]}%</span>
                  </div>
                  <div className="score-bar">
                    <div 
                      className="score-fill" 
                      style={{ width: `${percentages[type]}%` }}
                      data-type={type}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tips-section">
            <h3>💡 Lerntipps für dich:</h3>
            <ul className="tips-list">
              {learningType.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>

          {differences && differences.length > 0 && (
            <div className="comparison-section">
              <h3>📊 Vergleich mit vorherigem Versuch:</h3>
              <p className="comparison-info">
                Du hast bei {differences.length} von {result.totalQuestions} Fragen anders geantwortet.
              </p>
              <details className="differences-details">
                <summary>Details anzeigen</summary>
                <ul className="differences-list">
                  {differences.map((diff) => (
                    <li key={diff.questionId}>
                      <strong>Frage {diff.questionId}:</strong> 
                      <span className="diff-change">
                        {diff.previousAnswer} → {diff.currentAnswer}
                      </span>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          )}
        </div>

        <div className="result-actions">
          <button className="btn-secondary" onClick={onRestart}>
            Quiz erneut starten
          </button>
          <button className="btn-primary" onClick={onExport}>
            Ergebnisse exportieren
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
