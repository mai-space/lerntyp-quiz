// Local storage utilities for quiz data management

const STORAGE_KEY = 'lerntyp_quiz_data';

export const storage = {
  // Save quiz attempt
  saveQuizAttempt: (name, answers, result, timestamp = new Date().toISOString()) => {
    const data = storage.getAllAttempts();
    const attempt = {
      id: Date.now(),
      name,
      answers,
      result,
      timestamp
    };
    data.attempts.push(attempt);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return attempt;
  },

  // Get all quiz attempts
  getAllAttempts: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : { attempts: [] };
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return { attempts: [] };
    }
  },

  // Get attempts by name
  getAttemptsByName: (name) => {
    const data = storage.getAllAttempts();
    return data.attempts.filter(attempt => 
      attempt.name.toLowerCase() === name.toLowerCase()
    );
  },

  // Get last attempt
  getLastAttempt: () => {
    const data = storage.getAllAttempts();
    return data.attempts.length > 0 
      ? data.attempts[data.attempts.length - 1] 
      : null;
  },

  // Compare two attempts
  compareAttempts: (attempt1, attempt2) => {
    const differences = [];
    
    if (!attempt1 || !attempt2) return differences;

    attempt1.answers.forEach((answer1, index) => {
      const answer2 = attempt2.answers[index];
      if (answer1 !== answer2) {
        differences.push({
          questionId: index + 1,
          previousAnswer: answer1,
          currentAnswer: answer2
        });
      }
    });

    return differences;
  },

  // Export all data as JSON
  exportData: () => {
    const data = storage.getAllAttempts();
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `lerntyp-quiz-export-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  },

  // Clear all data
  clearAll: () => {
    localStorage.removeItem(STORAGE_KEY);
  }
};

// Calculate result from answers
export const calculateResult = (answers, questions) => {
  const scores = {
    visual: 0,
    auditory: 0,
    kinesthetic: 0,
    reading: 0
  };

  answers.forEach((answerId, index) => {
    const question = questions[index];
    const selectedOption = question.options.find(opt => opt.id === answerId);
    if (selectedOption) {
      scores[selectedOption.type]++;
    }
  });

  // Find the dominant learning type
  const maxScore = Math.max(...Object.values(scores));
  const dominantTypes = Object.keys(scores).filter(type => scores[type] === maxScore);

  return {
    scores,
    dominantType: dominantTypes[0], // In case of tie, take first
    allDominantTypes: dominantTypes,
    totalQuestions: answers.length
  };
};
