import React from 'react'
import AddTask from './AddTask'
import {Task} from '../../types'

function TaskList(): JSX.Element {

    

    // genera la lista de tareas usando useState y la interfaz Task
    const [tasks, setTasks] = React.useState<Task[]>([
        {
            id: 1,
            name: 'Tarea 1',
            done: false
        },
        {
            id: 2,
            name: 'Tarea 2',
            done: false
        },
        {
            id: 3,
            name: 'Tarea 3',
            done: false
        },
        {
            id: 4,
            name: 'Tarea 4',
            done: false
        },
    ])

    const handleDone = (id: number): void => {
        
        const newTask: Task = tasks.filter(task => task.id === id)[0]
        newTask.done = !newTask.done
        setTasks([...tasks])

    }


  return (
    <div className='flex w-full flex-col '>
        <h1 className='font-bold text-gray-400 text-5xl mx-auto py-5'>Listado de Tareas</h1>
        <AddTask addTask={setTasks} tasks={tasks} />
        <ul className='w-2/4 mx-auto border-2 shadow-lg'>
            {tasks.filter(task => task.done === false).map(task => (
                <li key={task.id} className=" text-center  py-4 hover:bg-slate-400">
                    <div className='flex flex-row justify-between w-full px-3 '>
                    <h2 className='font-mono font-bold text-xl'>{task.name}</h2>
                    <button onClick={() => handleDone(task.id)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Completar</button>
                    </div>

                </li>
            ))} 
        </ul>
    </div>

  )
}

export default TaskList