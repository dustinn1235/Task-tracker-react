import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onToggle, onDelete }) => {
  return (
    <div className="tasks-container">
      {tasks.length === 0 ? (
        <h3>No task to show</h3>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          ></Task>
        ))
      )}
    </div>
  );
};

export default Tasks;
