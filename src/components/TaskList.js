import React from 'react';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

const TaskList = ({ tasks, onToggleComplete, onEditTask, onDeleteTask, activeFilter, categories, searchTerm }) => {
  if (tasks.length === 0) {
    const emptyMessages = {
      all: searchTerm ? `No tasks found matching "${searchTerm}"` : 'No tasks yet! Add your first task above.',
      pending: searchTerm ? `No pending tasks found matching "${searchTerm}"` : 'No pending tasks! All caught up! 🎉',
      completed: searchTerm ? `No completed tasks found matching "${searchTerm}"` : 'No completed tasks yet. Keep working! 💪'
    };

    return (
      <div className="task-list empty">
        <div className="empty-state">
          <p className="empty-icon">
            {searchTerm ? '🔍' : activeFilter === 'all' ? '📝' : activeFilter === 'pending' ? '⏳' : '✅'}
          </p>
          <p className="empty-message">{emptyMessages[activeFilter]}</p>
          {searchTerm && (
            <p className="empty-suggestion">
              Try adjusting your search terms or check a different filter.
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="task-list">
      <div className="task-items">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
            categories={categories}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
