import React, { useState } from "react";
import "./Components/style.css"; // Optional styling

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add new task
  const handleAddTask = () => {
    if (task.trim() === "") return; // Prevent empty tasks
    setTasks([...tasks, task]); // Add to list
    setTask(""); // Clear input
  };

  // Delete task by index
  const handleDeleteTask = (index) => {
    const newTasks = [
      ...tasks.slice(0, index),
      ...tasks.slice(index + 1),
    ];
    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <h1>Task Manager</h1>

      {/* Input Section */}
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Task List */}
      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index}>
            <span>{t}</span>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
