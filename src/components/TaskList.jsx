import React, { useState } from 'react';
import './TaskList.css'
import EditTaskModal from './EditTaskModal';

const TaskList = ({ tasks, setTasks, handleTaskCompletion, handleTaskDeletion }) => {
  const [editTask, setEditTask] = useState(null);

  const handleEditClick = (task) => {
    setEditTask(task);
  };

  const handleTaskEdit = (updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );

    setTasks(updatedTasks);
    setEditTask(null);
  };

  return (
    <div className='.modal'>
      <div className='task-list-container'>
        <h1 className='task-list-header'>Task List</h1>
        {tasks.map(task => (
          <div key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskCompletion(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.name} - Priority: {task.priority}-Description: {task.description}
            </span>
            <button onClick={() => handleEditClick(task)}>Edit</button>
            <button onClick={() => handleTaskDeletion(task.id)}>Delete</button>
          </div>
        ))}
        {editTask && (
          <EditTaskModal
            task={editTask}
            onUpdateTask={handleTaskEdit}
            closeModal={() => setEditTask(null)}
          />
        )}
      </div>
    </div>
  );
};

export default TaskList;







