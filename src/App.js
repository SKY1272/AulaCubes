import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
const App = () => {
  const [tasks, setTasks] = useState([]);


  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);

  };


  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);

  };


  const handleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };


  const handleTaskDeletion = (taskId) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    setTasks(filteredTasks);
  };


  const handleTaskEdit = (editedTask) => {

    console.log('Edited Task:', editedTask);
  };

  return (
    <Router>
      <div>

        <nav>
          <ul>
            <li>
              <Link to="/">Task List</Link>
            </li>
            <li>
              <Link to="/add">Add Task</Link>
            </li>

          </ul>
        </nav>
        <Routes>

          <Route
            path="/"
            element={<TaskList
              tasks={tasks}
              setTasks={setTasks}
              handleTaskCompletion={handleTaskCompletion}
              handleTaskDeletion={handleTaskDeletion}
              handleTaskEdit={handleTaskEdit}
            />}
          />


          <Route
            path="/add"
            element={<AddTaskModal onAddTask={handleAddTask} />}
          />


        </Routes>
      </div>
    </Router>
  );
};

export default App;






