export const getStoredUser = () => {
  try {
    const user = localStorage.getItem('taskTrackerUser');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error getting stored user:', error);
    return null;
  }
};

export const setStoredUser = (username) => {
  try {
    localStorage.setItem('taskTrackerUser', JSON.stringify({ username }));
  } catch (error) {
    console.error('Error storing user:', error);
  }
};

export const removeStoredUser = () => {
  try {
    localStorage.removeItem('taskTrackerUser');
  } catch (error) {
    console.error('Error removing stored user:', error);
  }
};

export const getStoredTasks = () => {
  try {
    const tasks = localStorage.getItem('taskTrackerTasks');
    return tasks ? JSON.parse(tasks) : [];
  } catch (error) {
    console.error('Error getting stored tasks:', error);
    return [];
  }
};

export const setStoredTasks = (tasks) => {
  try {
    localStorage.setItem('taskTrackerTasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Error storing tasks:', error);
  }
};

export const clearStoredTasks = () => {
  try {
    localStorage.removeItem('taskTrackerTasks');
  } catch (error) {
    console.error('Error clearing stored tasks:', error);
  }
};

export const getStoredSettings = () => {
  try {
    const settings = localStorage.getItem('taskTrackerSettings');
    return settings ? JSON.parse(settings) : { darkMode: false };
  } catch (error) {
    console.error('Error getting stored settings:', error);
    return { darkMode: false };
  }
};

export const setStoredSettings = (settings) => {
  try {
    localStorage.setItem('taskTrackerSettings', JSON.stringify(settings));
  } catch (error) {
    console.error('Error storing settings:', error);
  }
};

export const getStoredCategories = () => {
  try {
    const categories = localStorage.getItem('taskTrackerCategories');
    return categories ? JSON.parse(categories) : [
      { id: 'personal', name: 'Personal', color: '#667eea' },
      { id: 'work', name: 'Work', color: '#28a745' },
      { id: 'urgent', name: 'Urgent', color: '#dc3545' }
    ];
  } catch (error) {
    console.error('Error getting stored categories:', error);
    return [
      { id: 'personal', name: 'Personal', color: '#667eea' },
      { id: 'work', name: 'Work', color: '#28a745' },
      { id: 'urgent', name: 'Urgent', color: '#dc3545' }
    ];
  }
};

export const setStoredCategories = (categories) => {
  try {
    localStorage.setItem('taskTrackerCategories', JSON.stringify(categories));
  } catch (error) {
    console.error('Error storing categories:', error);
  }
};
