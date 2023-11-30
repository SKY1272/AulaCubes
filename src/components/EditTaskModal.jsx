import React, { useState } from 'react';
import './Edit.css'

const EditTaskModal = ({ task, onUpdateTask }) => {
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleUpdateTask = () => {
    
    if (!editedTask.name) {
      alert('Task name is required');
      return;
    }

    onUpdateTask(editedTask);
    
  };

  return (
    <div className='edit-task-modal'>
      <h2>Edit Task</h2>
      <label>
        Task Name:
        <input
          type="text"
          value={editedTask.name}
          onChange={(e) => setEditedTask({ ...editedTask, name: e.target.value })}
        />
      </label>
      <br />
      <label>
        Task Description:
        <textarea
          value={editedTask.description}
          onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
        />
      </label>
      <br />
      <label>
        Priority:
        <select
          value={editedTask.priority}
          onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <br />
      <button onClick={handleUpdateTask}>Update Task</button>
    </div>
  );
};

export default EditTaskModal;


