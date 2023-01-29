import React, { SetStateAction } from "react";
import { Task } from "../../types";

function AddTask(props: any): JSX.Element {
  const addTask: React.Dispatch<SetStateAction<Task[]>> = props.addTask;
  const tasks: Task[] = props.tasks;
  const [newtask, setNewTask] = React.useState<string>("");

  const handlenewTask = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTask: Task = {
      id: Math.floor(Math.random() * 1000),
      name: newtask,
      done: false,
    };
    addTask([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <form onSubmit={handlenewTask}>
      <div className="border-spacing-1 border-gray mx-auto my-3 border-2 w-1/2 rounded-md py-2 px-2 flex flex-row justify-between">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTask(e.target.value)
          }
          type="text"
          placeholder="Añadir tarea"
          value={newtask}
          className="w-full border-0 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export default AddTask;
