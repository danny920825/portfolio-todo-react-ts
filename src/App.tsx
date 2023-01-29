import React from "react";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="flex flex-col justify-between flex-1">
      <div className="flex flex-1">
        <TaskList />
      </div>
      <footer className="fixed bottom-0 left-0 z-20 w-full p-5 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-3 dark:bg-gray-800 dark:border-gray-600">
        <p className="text-white mx-auto">
          Hecho por{" "}
          <a href="https://twitter.com/Danny_920825" target={'_blank'} rel="noreferrer" className="text-blue-400">
            Danny
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
