"use client"
import React, { useEffect, useState } from "react";
 
const SwitchTheme = () => { 
  const [theme, setTheme] = useState("dark")
 
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
 
  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);


  return (
    <button className="btn btn-circle" onClick={toggleTheme}>
      {theme === "dark" ? (
       <div className="text-blue-600">dark</div>
      ) : (
        <div className="text-yellow-400">sun</div>
      )}
    </button>
  );
};

export default SwitchTheme;

