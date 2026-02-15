import { useState } from 'react';
import NameInput from './components/NameInput';
import QuizQuestion from './components/QuizQuestion';
import Result from './components/Result';
import ThemeToggle from './components/ThemeToggle';
import { quizQuestions } from './data/quizData';
import { storage, calculateResult } from './utils/storage';
import './App.css';

function App() {
  const [step, setStep] = useState('name'); // 'name', 'quiz', 'result'
  const [name, setName] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentSelections, setCurrentSelections] = useState([]);
  const [result, setResult] = useState(null);
  const [previousAttempt, setPreviousAttempt] = useState(() => storage.getLastAttempt());
  const [differences, setDifferences] = useState([]);

  const handleNameSubmit = (submittedName) => {
    setName(submittedName);
    setStep('quiz');
  };

  const handleAnswer = (selectedIds) => {
    setCurrentSelections(selectedIds);
  };

  const handleNext = () => {
    const newAnswers = [...answers, currentSelections];
    setAnswers(newAnswers);
    setCurrentSelections([]);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed
      const quizResult = calculateResult(newAnswers, quizQuestions);
      setResult(quizResult);
      
      // Save to local storage
      const savedAttempt = storage.saveQuizAttempt(name, newAnswers, quizResult);
      
      // Compare with previous attempt if exists
      if (previousAttempt) {
        const diffs = storage.compareAttempts(previousAttempt, savedAttempt);
        setDifferences(diffs);
      }
      
      setStep('result');
    }
  };

  const handleExport = () => {
    storage.exportData();
  };

  const handleRestart = () => {
    // Store current attempt as previous for next comparison
    const lastAttempt = storage.getLastAttempt();
    setPreviousAttempt(lastAttempt);
    
    setStep('name');
    setName('');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setCurrentSelections([]);
    setResult(null);
    setDifferences([]);
  };

  return (
    <div className="app">
      <ThemeToggle />
      {step === 'name' && (
        <NameInput onSubmit={handleNameSubmit} />
      )}
      
      {step === 'quiz' && (
        <QuizQuestion
          question={quizQuestions[currentQuestionIndex]}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={quizQuestions.length}
          selectedAnswers={currentSelections}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      )}
      
      {step === 'result' && result && (
        <Result
          name={name}
          result={result}
          differences={differences}
          onExport={handleExport}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
