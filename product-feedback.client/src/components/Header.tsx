import { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <header className="col-span-2 flex justify-between items-center py-2 px-4">
      <a href="#" className="text-xl">
        Feedback Board
      </a>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="p-2.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 active:bg-gray-300 transition-all leading-0"
          onClick={() => setDarkMode(!darkMode)}
        >
          <span className="material-symbols-rounded">
            {darkMode ? "dark_mode" : "light_mode"}
          </span>
        </button>
        <img src="/avatar.svg" alt="Avatar placeholder" className="w-10 h-10" />
      </div>
    </header>
  );
};

export default Header;
