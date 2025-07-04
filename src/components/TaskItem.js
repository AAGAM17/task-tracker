import React from 'react';
import '../styles/TaskItem.css';

const TaskItem = ({ task, onToggleComplete, onEditTask, onDeleteTask, categories }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDueDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const isToday = date.toDateString() === today.toDateString();
    const isTomorrow = date.toDateString() === tomorrow.toDateString();
    const isPast = date < today && !isToday;
    
    if (isToday) return 'Today';
    if (isTomorrow) return 'Tomorrow';
    if (isPast) return 'Overdue';
    
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== today.getFullYear() ? 'numeric' : undefined
    });
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return '🔴';
      case 'medium': return '🟡';
      case 'low': return '🟢';
      default: return '🟡';
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return 'priority-medium';
    }
  };

  const getDueDateClass = (dueDate) => {
    if (!dueDate) return '';
    
    const date = new Date(dueDate);
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
    const isPast = date < today && !isToday;
    
    if (isPast) return 'due-overdue';
    if (isToday) return 'due-today';
    return 'due-upcoming';
  };

  const getCategory = () => {
    return categories.find(cat => cat.id === task.categoryId);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDeleteTask(task.id);
    }
  };

  const category = getCategory();

  return (
    <div className={`task-item ${task.completed ? 'completed' : 'pending'} ${getPriorityClass(task.priority)}`}>
      <div className="task-content">
        <div className="task-header">
          <div className="task-title-section">
            <h3 className="task-title">{task.title}</h3>
            <div className="task-badges">
              <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
                {getPriorityIcon(task.priority)} {task.priority || 'medium'}
              </span>
              {category && (
                <span
                  className="category-badge"
                  style={{ backgroundColor: category.color, color: 'white' }}
                >
                  🏷️ {category.name}
                </span>
              )}
              {task.dueDate && (
                <span className={`due-date-badge ${getDueDateClass(task.dueDate)}`}>
                  📅 {formatDueDate(task.dueDate)}
                </span>
              )}
            </div>
          </div>
          <div className="task-actions">
            <button
              onClick={() => onToggleComplete(task.id)}
              className={`toggle-button ${task.completed ? 'complete' : 'incomplete'}`}
              title={task.completed ? 'Mark as pending' : 'Mark as completed'}
            >
              {task.completed ? '✓' : '○'}
            </button>
            <button
              onClick={() => onEditTask(task)}
              className="edit-button"
              title="Edit task"
            >
              ✏️
            </button>
            <button
              onClick={handleDelete}
              className="delete-button"
              title="Delete task"
            >
              🗑️
            </button>
          </div>
        </div>
        
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
        
        <div className="task-meta">
          <span className="task-status">
            {task.completed ? '✅ Completed' : '⏳ Pending'}
          </span>
          <span className="task-date">
            Created: {formatDate(task.createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
