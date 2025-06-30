import React, { useState } from "react";

export default function AddTaskModal({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addTask({ title, description, dueDate });
      setTitle(""); setDescription(""); setDueDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mt-4">
      <input type="text" placeholder="Task Title" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border rounded" required />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="w-full p-2 border rounded" />
      <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} className="w-full p-2 border rounded" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
    </form>
  );
}
