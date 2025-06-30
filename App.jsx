import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Header from "./components/Header";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <Header toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </Router>
  );
}
