import React from "react";

export default function TaskCard({ task, onDelete }) {
  return (
    <div className="border p-3 rounded shadow bg-white dark:bg-gray-700 my-2">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">{task.title}</h3>
          <p>{task.description}</p>
          <small>Due: {task.dueDate}</small>
        </div>
        <button onClick={() => onDelete(task.id)} className="text-red-500 font-bold">X</button>
      </div>
    </div>
  );
}
