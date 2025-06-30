import React from "react";
import { Link } from "react-router-dom";

export default function Header({ toggleDarkMode, darkMode }) {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
      <h1 className="text-xl font-bold">Task Manager</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/notes">Notes</Link>
        <button onClick={toggleDarkMode} className="ml-4 px-2 py-1 bg-gray-300 dark:bg-gray-700 rounded">
          {darkMode ? "Light" : "Dark"} Mode
        </button>
      </nav>
    </header>
  );
}
