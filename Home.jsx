import React, { useState } from "react";
import TaskCard from "../components/TaskCard";
import AddTaskModal from "../components/AddTaskModal";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now() };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <AddTaskModal addTask={addTask} />
      <div className="mt-4">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
}
