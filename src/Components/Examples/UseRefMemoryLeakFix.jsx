import Todo from "../Todo"
import { useState } from "react"

function UseRefMemoryLeakFix() {
  const [showMemoryLeak, setShowMemoryLeak] = useState(false)
  const [showTodo, setShowTodo] = useState(true)

  const showError = () => {
    setShowMemoryLeak(!showMemoryLeak)
  }

  return (
    <div className='mb-4'>
      <h1 className='text-center'>Memory Leak Fix</h1>
      <p className='lead text-center'>
        This Hook can be used for correcting a common React Error known as the
        'Memory Leak', which occurs when fetching data from a back-end. This is
        a common error for Firebase projects and is caused by the component
        being 'unmounted' during the fetch request.
      </p>
      <p className='text-center fw-semibold mt-4'>
        Note: I could not get the error to appear even when extending the time
        delay to 5 seconds and removing the customized portion of my code. It is
        possible that React removed this error log.
      </p>
      <form className='row g-3 form-check' id='Form'>
        <div className='cols-md-4'>
          <label htmlFor='showError' className='form-check-label'>
            Show memory leak in console.
          </label>
          <input
            type='checkbox'
            name='showError'
            id='showError'
            className='form-check-input'
            defaultChecked={showMemoryLeak}
            onClick={showError}
          />
        </div>
      </form>
      {showTodo && <Todo showMemoryLeak={showMemoryLeak} />}
      <button
        onClick={() => setShowTodo(!showTodo)}
        className='btn btn-primary'
      >
        Toggle Todo
      </button>
    </div>
  )
}
export default UseRefMemoryLeakFix
