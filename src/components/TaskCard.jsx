import React from 'react';

const TaskCard = () => {
  return (
    <div className="task-card">
      <button className="task-button">
        <span>Post your task</span>
        <span className="arrow">→</span>
      </button>
    </div>
  );
};

export default TaskCard;