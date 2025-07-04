import React from 'react';
import '../styles/TaskFilter.css';

const TaskFilter = ({ activeFilter, onFilterChange, taskCounts }) => {
  const filters = [
    { key: 'all', label: 'All', icon: '📋' },
    { key: 'pending', label: 'Pending', icon: '⏳' },
    { key: 'completed', label: 'Completed', icon: '✅' }
  ];

  return (
    <div className="task-filter">
      <h3>Filter Tasks</h3>
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`filter-button ${activeFilter === filter.key ? 'active' : ''}`}
          >
            <span className="filter-icon">{filter.icon}</span>
            <span className="filter-label">{filter.label}</span>
            <span className="filter-count">({taskCounts[filter.key] || 0})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskFilter;
