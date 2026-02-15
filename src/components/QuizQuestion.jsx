import './QuizQuestion.css';

function QuizQuestion({ question, currentQuestion, totalQuestions, selectedAnswers, onAnswer, onNext }) {
  const handleOptionToggle = (optionId) => {
    let newAnswers;
    if (selectedAnswers.includes(optionId)) {
      newAnswers = selectedAnswers.filter(id => id !== optionId);
    } else {
      newAnswers = [...selectedAnswers, optionId];
    }
    onAnswer(newAnswers);
  };

  return (
    <div className="quiz-question-container">
      <div className="quiz-card">
        <div className="quiz-header">
          <div className="progress-info">
            Frage {currentQuestion} von {totalQuestions}
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        <div className="question-content">
          <h2>{question.question}</h2>
          <p className="multi-select-hint">Du kannst eine oder mehrere Antworten auswählen</p>
          
          <div className="options-list">
            {question.options.map((option) => (
              <button
                key={option.id}
                className={`option-button ${selectedAnswers.includes(option.id) ? 'selected' : ''}`}
                onClick={() => handleOptionToggle(option.id)}
              >
                <span className="option-id">{option.id.toUpperCase()}</span>
                <span className="option-text">{option.text}</span>
                {selectedAnswers.includes(option.id) && <span className="checkmark">✓</span>}
              </button>
            ))}
          </div>

          <button 
            className="next-button" 
            onClick={onNext}
            disabled={selectedAnswers.length === 0}
          >
            {currentQuestion === totalQuestions ? 'Quiz abschließen' : 'Weiter'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizQuestion;
