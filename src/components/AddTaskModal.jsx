
import React, { useState } from 'react';
import './AddTask.css'
const AddTaskModal = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const handleAddTask = () => {
    if (!taskName) {
      alert('Task name is required');
      return;
    }

    const newTask = {
      id: Math.random(),
      name: taskName,
      description: taskDescription,
      priority: priority,
      completed: false,
    };

    onAddTask(newTask);

    setTaskName('');
    setTaskDescription('');
    setPriority('low');
  };

  return (
    
      <div className="Add-task-modal">
        <h1>Add New Task</h1>
        <label>
          Task Name:
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </label>
        <br />
        <label>
          Task Description:
          <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Priority:
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <br />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
   
  );
};

export default AddTaskModal;




