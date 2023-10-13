import React, { useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);
  const [completed, setCompleted] = useState([]);

  const handleClick = () => {
    if (task.trim().length === 0) {
      return;
    }
    // Instead of directly modifying the tasklist, create a new array with the new task.
    setTasklist([...tasklist, task.trim()]);
    setTask("");
  };

  const handleDelete = (index) => {
    const updatedTasklist = tasklist.filter((_, i) => i !== index);
    setTasklist(updatedTasklist);
  };

  const handleComplete = (index) => {
    const taskToComplete = tasklist[index];
    setCompleted([...completed, taskToComplete]);
    handleDelete(index);
  };

  const handleCompletedDelete = (index) => {
    const updatedCompleted = completed.filter((_, i) => i !== index);
    setCompleted(updatedCompleted);
  };

  return (
    <div className="container">
      <h3>Todo</h3>
      <p>
        <input
          type="text"
          placeholder="Task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button onClick={handleClick}>Add Task</button>
      </p>
      {tasklist.length === 0 && <span>Add tasks</span>}
      <h5>Pending</h5>
      <ul>
        {tasklist.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleComplete(index)}>Complete</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <h5>Completed</h5>
      <ul>
        {completed.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleCompletedDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
