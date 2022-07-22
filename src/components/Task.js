import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task: { id, text, day, reminder }, onToggle, onDelete }) => {
  return (
    <div
      className={`task ${reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(id)}
    >
      <div style={{ display: "flex" }}>
        <p>{text}</p>
        <FaTimes className="deleteBtn" onClick={() => onDelete(id)}></FaTimes>
      </div>
      <p style={{ fontSize: "14px", fontWeight: "400" }}>{day}</p>
    </div>
  );
};

export default Task;
