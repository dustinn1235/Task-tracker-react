import React from "react";
import { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState({ text: "", day: "", reminder: false });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!task.text) {
      alert("Please add a task!");
      return;
    }
    onAdd(task);

    setTask({ text: "", day: "", reminder: false });
  };

  return (
    <form className="task-form" onSubmit={onSubmit}>
      <div className="form-element">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={task.text}
          onChange={(e) => setTask({ ...task, text: e.target.value })}
        ></input>
      </div>
      <div className="form-element">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Days & Time"
          value={task.day}
          onChange={(e) => setTask({ ...task, day: e.target.value })}
        ></input>
      </div>
      <div className="form-element" style={{ flexDirection: "row" }}>
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={task.reminder}
          onChange={(e) => setTask({ ...task, reminder: e.target.checked })}
        ></input>
      </div>
      <input type="submit" value="Save Task"></input>
    </form>
  );
};

export default TaskForm;
