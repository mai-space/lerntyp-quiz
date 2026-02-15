import './QuizQuestion.css';

function QuizQuestion({ question, currentQuestion, totalQuestions, selectedAnswer, onAnswer }) {
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
          
          <div className="options-list">
            {question.options.map((option) => (
              <button
                key={option.id}
                className={`option-button ${selectedAnswer === option.id ? 'selected' : ''}`}
                onClick={() => onAnswer(option.id)}
              >
                <span className="option-id">{option.id.toUpperCase()}</span>
                <span className="option-text">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizQuestion;
