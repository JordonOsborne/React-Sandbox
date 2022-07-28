import React, { useState, useCallback } from "react"
import Button from "../Button"

function UseCallbackExample() {
  const [tasks, setTasks] = useState([])

  // Exmple of Internal Child Component
  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, "Some New Task"])
  }, [setTasks])

  // Example of External Child Component
  const clearTask = useCallback(() => {
    setTasks([])
  }, [setTasks])

  return (
    <div>
      <div className='row justify-content-center'>
        <AddButton addTask={addTask} />
        <Button action={clearTask} type='secondary' text='Clear Tasks' />
      </div>
      <ul className='list-group-flush my-4 px-4'>
        {tasks.map((task, index) => {
          return (
            <li className='list-group-item text-center' key={index}>
              {task}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const AddButton = React.memo(({ addTask }) => {
  console.log("Button Rendered")
  return (
    <div className='col-2'>
      <button className={`btn btn-primary d-block mx-auto`} onClick={addTask}>
        Add Task
      </button>
    </div>
  )
})
export default UseCallbackExample
