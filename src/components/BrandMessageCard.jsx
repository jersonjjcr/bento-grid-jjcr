import React, { useState } from 'react';

const BrandMessageCard = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Revisar dashboard analytics', completed: false, priority: 'high' },
    { id: 2, text: 'Actualizar diseño de cards', completed: true, priority: 'medium' },
    { id: 3, text: 'Implementar calendar sync', completed: false, priority: 'high' },
    { id: 4, text: 'Optimizar responsive design', completed: false, priority: 'low' },
    { id: 5, text: 'Testing en móviles', completed: false, priority: 'medium' }
  ]);

  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo,
        completed: false,
        priority: 'medium'
      }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTodo();
    }
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="brand-message-card todo-card">
      <div className="todo-header">
        <div className="todo-title">
          <h3>📋 To-Do List</h3>
          <div className="todo-stats">
            <span className="completed-count">{completedCount}/{totalCount}</span>
          </div>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${totalCount ? (completedCount / totalCount) * 100 : 0}%` }}
          ></div>
        </div>
      </div>

      <div className="todo-input-section">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Agregar nueva tarea..."
          className="todo-input"
          autoComplete="off"
          spellCheck={false}
        />
        <button onClick={addTodo} className="add-btn" type="button">+</button>
      </div>

      <div className="todo-list">
        {todos.map(todo => (
          <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content">
              <button
                className={`todo-checkbox ${todo.completed ? 'checked' : ''}`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.completed && '✓'}
              </button>
              <span className="todo-text">{todo.text}</span>
              <span className={`priority-badge ${todo.priority}`}>
                {todo.priority === 'high' ? '🔴' : todo.priority === 'medium' ? '🟡' : '🟢'}
              </span>
            </div>
            <button
              className="delete-btn"
              onClick={() => deleteTodo(todo.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {todos.length === 0 && (
        <div className="empty-state">
          <span>🎉 ¡No hay tareas pendientes!</span>
        </div>
      )}
    </div>
  );
};

export default BrandMessageCard;