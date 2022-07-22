import { useState, useRef, useEffect } from "react"

function UseRefPrevState() {
  const renders = useRef(1)
  const prevName = useRef("")
  const [name, setName] = useState()

  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name
  }, [name])

  const clearForm = (e) => {
    e.preventDefault()
    setName("")
    renders.current = 1
    prevName.current = ""
  }

  return (
    <div className='mb-4'>
      <h1 className='text-center'>Get Previous State</h1>
      <p className='lead text-center'>
        This useRef Hook can be used for referencing previous state.
      </p>
      <form className='row g-3' id='Form'>
        <h3 className={name ? "col-md-6" : "col-md-12"}>
          Number of Renders: {renders.current}
        </h3>
        {name && (
          <h3 className='col-md-6'>Previous Entry: {prevName.current}</h3>
        )}
        <div className='col-md-4'>
          <label htmlFor='Number' className='form-label'>
            Number
          </label>
          <input
            type='text'
            className='form-control mb-3'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className='col-12'>
            <button onClick={clearForm} className='btn btn-secondary'>
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default UseRefPrevState
