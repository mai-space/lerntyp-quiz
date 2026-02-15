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

  // Compare two attempts (handles both single and multiple selections)
  compareAttempts: (attempt1, attempt2) => {
    const differences = [];
    
    if (!attempt1 || !attempt2) return differences;

    attempt1.answers.forEach((answer1, index) => {
      const answer2 = attempt2.answers[index];
      
      // Normalize to arrays for comparison
      const ans1 = Array.isArray(answer1) ? answer1.sort().join(',') : answer1;
      const ans2 = Array.isArray(answer2) ? answer2.sort().join(',') : answer2;
      
      if (ans1 !== ans2) {
        differences.push({
          questionId: index + 1,
          previousAnswer: Array.isArray(answer1) ? answer1.join(', ') : answer1,
          currentAnswer: Array.isArray(answer2) ? answer2.join(', ') : answer2
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

// Calculate result from answers (supporting multiple selections)
export const calculateResult = (answers, questions) => {
  const scores = {
    visual: 0,
    auditory: 0,
    haptic: 0,
    communicative: 0
  };

  let totalSelections = 0;

  answers.forEach((selectedIds, index) => {
    const question = questions[index];
    // Handle both single answer (string) and multiple answers (array)
    const ids = Array.isArray(selectedIds) ? selectedIds : [selectedIds];
    
    ids.forEach(answerId => {
      const selectedOption = question.options.find(opt => opt.id === answerId);
      if (selectedOption && selectedOption.types) {
        selectedOption.types.forEach(type => {
          scores[type]++;
          totalSelections++;
        });
      }
    });
  });

  // Find the dominant learning type
  const maxScore = Math.max(...Object.values(scores));
  const dominantTypes = Object.keys(scores).filter(type => scores[type] === maxScore);

  return {
    scores,
    dominantType: dominantTypes[0], // In case of tie, take first
    allDominantTypes: dominantTypes,
    totalQuestions: answers.length,
    totalSelections
  };
};
