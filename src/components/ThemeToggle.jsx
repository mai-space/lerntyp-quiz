import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={isDark ? 'Zum hellen Modus wechseln' : 'Zum dunklen Modus wechseln'}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;
