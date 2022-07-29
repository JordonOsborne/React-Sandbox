import useLocalStorage from "../../Hooks/useLocalStorage"

function UseLocalStorageExample() {
  const [task, setTask] = useLocalStorage("task", "")
  const [tasks, setTasks] = useLocalStorage("tasks", [])

  function getNextId() {
    return tasks.length + 1
  }

  const addTask = (e) => {
    e.preventDefault()

    const taskObj = {
      id: getNextId(),
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    }

    setTasks([...tasks, taskObj])
  }

  return (
    <>
      <form className='row' onSubmit={addTask}>
        <div className='col-md-4'>
          <label>Task</label>
          <input
            type='text'
            className='form-control'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className='col-md-12 my-2'>
          <button type='submit' className='btn btn-primary' onClick={addTask}>
            Add Task
          </button>
        </div>
      </form>
      {tasks && (
        <ul className='list-group my-4 px-4'>
          {tasks.map((item) => {
            return <li key={item.id}>{item.task}</li>
          })}
        </ul>
      )}
    </>
  )
}
export default UseLocalStorageExample
