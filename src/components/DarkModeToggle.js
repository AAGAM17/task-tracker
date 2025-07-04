import React from 'react';
import '../styles/DarkModeToggle.css';

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`dark-mode-toggle ${darkMode ? 'dark' : 'light'}`}
      title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      <span className="toggle-icon">
        {darkMode ? '☀️' : '🌙'}
      </span>
      <span className="toggle-text">
        {darkMode ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};

export default DarkModeToggle;
