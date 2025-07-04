import { useState, useEffect, useMemo } from 'react';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';
import Search from './components/Search';
import DarkModeToggle from './components/DarkModeToggle';
import CategoryManager from './components/CategoryManager';
import { 
  getStoredUser, 
  setStoredUser, 
  removeStoredUser,
  getStoredTasks,
  setStoredTasks,
  getStoredSettings,
  setStoredSettings,
  getStoredCategories,
  setStoredCategories
} from './utils/localStorage';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showCategoryManager, setShowCategoryManager] = useState(false);

  useEffect(() => {
    const storedUser = getStoredUser();
    if (storedUser) {
      setUser(storedUser);
    }

    const storedTasks = getStoredTasks();
    setTasks(storedTasks);

    const storedSettings = getStoredSettings();
    setDarkMode(storedSettings.darkMode);

    const storedCategories = getStoredCategories();
    setCategories(storedCategories);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
      document.body.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    setStoredSettings({ darkMode });
  }, [darkMode]);

  useEffect(() => {
    setStoredCategories(categories);
  }, [categories]);

  const handleLogin = (username) => {
    const userData = { username };
    setUser(userData);
    setStoredUser(username);
  };

  const handleLogout = () => {
    setUser(null);
    removeStoredUser();
  };

  const generateId = () => {
    return Date.now() + Math.random().toString(36).substr(2, 9);
  };

  const handleAddTask = (taskData) => {
    const newTask = {
      id: generateId(),
      ...taskData,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const handleUpdateTask = (taskId, updatedData) => {
    setTasks(prev => prev.map(task =>
      task.id === taskId
        ? { ...task, ...updatedData }
        : task
    ));
    setEditingTask(null);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(prev => prev.map(task =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleCategoriesChange = (newCategories) => {
    setCategories(newCategories);
  };

  // Filter and search tasks
  const filteredAndSearchedTasks = useMemo(() => {
    let filtered = tasks;

    // Apply filter
    switch (activeFilter) {
      case 'completed':
        filtered = tasks.filter(task => task.completed);
        break;
      case 'pending':
        filtered = tasks.filter(task => !task.completed);
        break;
      default:
        filtered = tasks;
    }

    // Apply search
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(search) ||
        (task.description && task.description.toLowerCase().includes(search))
      );
    }

    // Sort by priority and due date
    return filtered.sort((a, b) => {
      // First, sort by completion status (pending first)
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
      }

      // Then sort by priority
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      const aPriority = priorityOrder[a.priority] ?? 1;
      const bPriority = priorityOrder[b.priority] ?? 1;
      
      if (aPriority !== bPriority) {
        return aPriority - bPriority;
      }

      // Then sort by due date (tasks with due dates first)
      if (a.dueDate && !b.dueDate) return -1;
      if (!a.dueDate && b.dueDate) return 1;
      if (a.dueDate && b.dueDate) {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }

      // Finally, sort by creation date (newest first)
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }, [tasks, activeFilter, searchTerm]);

  const getTaskCounts = () => {
    const searchFiltered = searchTerm.trim() 
      ? tasks.filter(task =>
          task.title.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
          (task.description && task.description.toLowerCase().includes(searchTerm.toLowerCase().trim()))
        )
      : tasks;

    return {
      all: searchFiltered.length,
      pending: searchFiltered.filter(task => !task.completed).length,
      completed: searchFiltered.filter(task => task.completed).length
    };
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const taskCounts = getTaskCounts();

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>📋 Personal Task Tracker</h1>
          <div className="header-controls">
            <div className="user-info">
              <span>Welcome, <strong>{user.username}</strong>!</span>
            </div>
            <div className="header-buttons">
              <button
                onClick={() => setShowCategoryManager(true)}
                className="manage-categories-button"
                title="Manage Categories"
              >
                🏷️ Categories
              </button>
              <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <TaskForm
            onAddTask={handleAddTask}
            editingTask={editingTask}
            onUpdateTask={handleUpdateTask}
            onCancelEdit={handleCancelEdit}
            categories={categories}
          />

          <Search onSearchChange={setSearchTerm} searchTerm={searchTerm} />

          <TaskFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            taskCounts={taskCounts}
          />

          <TaskList
            tasks={filteredAndSearchedTasks}
            onToggleComplete={handleToggleComplete}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
            activeFilter={activeFilter}
            categories={categories}
            searchTerm={searchTerm}
          />
        </div>
      </main>

      {showCategoryManager && (
        <CategoryManager
          categories={categories}
          onCategoriesChange={handleCategoriesChange}
          onClose={() => setShowCategoryManager(false)}
        />
      )}
    </div>
  );
}

export default App;
