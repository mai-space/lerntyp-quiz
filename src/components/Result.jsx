import { learningTypes, kolbLearningStyles } from '../data/quizData';
import './Result.css';

function Result({ name, result, differences, onExport, onRestart }) {
  const learningType = learningTypes[result.dominantType];
  const kolbStyle = kolbLearningStyles[result.dominantKolbType];
  
  // Calculate percentages for VARK types
  const percentages = {};
  Object.keys(result.scores).forEach(type => {
    percentages[type] = Math.round((result.scores[type] / result.totalQuestions) * 100);
  });

  // Calculate percentages for Kolb styles
  const kolbPercentages = {};
  Object.keys(result.kolbScores).forEach(type => {
    const total = Object.values(result.kolbScores).reduce((sum, score) => sum + score, 0);
    kolbPercentages[type] = total > 0 ? Math.round((result.kolbScores[type] / total) * 100) : 0;
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
              {Object.entries(result.scores).map(([type]) => (
                <div key={type} className="score-bar-container">
                  <div className="score-label">
                    <span className="score-name">
                      {learningTypes[type].name.includes(' ') 
                        ? learningTypes[type].name.split(' ')[0] 
                        : learningTypes[type].name}
                    </span>
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

          {kolbStyle && (
            <div className="kolb-section">
              <h3>🎯 Tendenz zu Lernstil nach Kolb:</h3>
              <div className="kolb-style-badge">
                <h4>{kolbStyle.name}</h4>
              </div>
              <p className="kolb-description">{kolbStyle.description}</p>
              {kolbStyle.typical && (
                <p className="kolb-typical"><em>{kolbStyle.typical}</em></p>
              )}
              {kolbStyle.traits && (
                <div className="kolb-traits">
                  <strong>Charakteristika:</strong>
                  <ul>
                    {kolbStyle.traits.map((trait, index) => (
                      <li key={index}>{trait}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="kolb-scores-section">
                <h4>Verteilung der Kolb-Lernstile:</h4>
                <div className="scores-chart">
                  {Object.entries(result.kolbScores).map(([type]) => (
                    <div key={type} className="score-bar-container">
                      <div className="score-label">
                        <span className="score-name">
                          {kolbLearningStyles[type].name.split(' ')[0]}
                        </span>
                        <span className="score-value">{kolbPercentages[type]}%</span>
                      </div>
                      <div className="score-bar">
                        <div 
                          className="score-fill" 
                          style={{ width: `${kolbPercentages[type]}%` }}
                          data-type={`kolb-${type}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

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
