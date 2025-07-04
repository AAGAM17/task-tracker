import React, { useState } from 'react';
import '../styles/CategoryManager.css';

const CategoryManager = ({ categories, onCategoriesChange, onClose }) => {
  const [newCategory, setNewCategory] = useState({ name: '', color: '#667eea' });
  const [editingCategory, setEditingCategory] = useState(null);

  const colors = [
    '#667eea', '#28a745', '#dc3545', '#ffc107', '#6f42c1',
    '#fd7e14', '#20c997', '#e83e8c', '#17a2b8', '#6c757d'
  ];

  const handleAddCategory = () => {
    if (!newCategory.name.trim()) return;

    const category = {
      id: Date.now().toString(),
      name: newCategory.name.trim(),
      color: newCategory.color
    };

    onCategoriesChange([...categories, category]);
    setNewCategory({ name: '', color: '#667eea' });
  };

  const handleEditCategory = (category) => {
    setEditingCategory({ ...category });
  };

  const handleUpdateCategory = () => {
    if (!editingCategory.name.trim()) return;

    const updatedCategories = categories.map(cat =>
      cat.id === editingCategory.id ? editingCategory : cat
    );
    onCategoriesChange(updatedCategories);
    setEditingCategory(null);
  };

  const handleDeleteCategory = (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category? Tasks with this category will become uncategorized.')) {
      const updatedCategories = categories.filter(cat => cat.id !== categoryId);
      onCategoriesChange(updatedCategories);
    }
  };

  return (
    <div className="category-manager-overlay">
      <div className="category-manager">
        <div className="category-manager-header">
          <h2>🏷️ Manage Categories</h2>
          <button onClick={onClose} className="close-button">✕</button>
        </div>

        <div className="category-manager-content">
          <div className="add-category-section">
            <h3>Add New Category</h3>
            <div className="category-form">
              <input
                type="text"
                value={newCategory.name}
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                placeholder="Category name"
                className="category-input"
              />
              <div className="color-picker">
                {colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setNewCategory({ ...newCategory, color })}
                    className={`color-option ${newCategory.color === color ? 'selected' : ''}`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              <button onClick={handleAddCategory} className="add-category-button">
                Add Category
              </button>
            </div>
          </div>

          <div className="existing-categories-section">
            <h3>Existing Categories</h3>
            <div className="categories-list">
              {categories.map(category => (
                <div key={category.id} className="category-item">
                  {editingCategory && editingCategory.id === category.id ? (
                    <div className="editing-category">
                      <input
                        type="text"
                        value={editingCategory.name}
                        onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                        className="category-input"
                      />
                      <div className="color-picker">
                        {colors.map(color => (
                          <button
                            key={color}
                            onClick={() => setEditingCategory({ ...editingCategory, color })}
                            className={`color-option ${editingCategory.color === color ? 'selected' : ''}`}
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                      <div className="category-actions">
                        <button onClick={handleUpdateCategory} className="save-button">
                          Save
                        </button>
                        <button onClick={() => setEditingCategory(null)} className="cancel-button">
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="category-display">
                      <div className="category-info">
                        <span
                          className="category-color"
                          style={{ backgroundColor: category.color }}
                        ></span>
                        <span className="category-name">{category.name}</span>
                      </div>
                      <div className="category-actions">
                        <button
                          onClick={() => handleEditCategory(category)}
                          className="edit-button"
                          title="Edit category"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(category.id)}
                          className="delete-button"
                          title="Delete category"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryManager;
