import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar/Index";
import { useState } from "react";
import { Header } from "../components/header/Index";

export const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <div
      data-theme={darkMode ? "dark" : "light"}
      className="h-screen overflow-hidden flex border-e-bg-primary dark:bg-bg-secondary dark:text-text-secondary bg-bg-primary"
    >
      <div className="w-60">
        <Sidebar />
      </div>
      <div className="flex-1">
        <header>
          <Header toggleDarkMode={toggleDarkMode} isdarkMode={darkMode} />
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
