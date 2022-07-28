import { useState, useRef, useMemo, useEffect } from "react"

function UseMemoExample() {
  const [number, setNumber] = useState(1)
  // eslint-disable-next-line
  const [inc, setInc] = useState(0)

  const renders = useRef(1)
  useEffect(() => {
    renders.current = renders.current + 1
  })

  // const sqrt = getSqrt(number)
  const sqrt = useMemo(() => getSqrt(number), [number])

  const Test = (e) => {
    e.preventDefault()
    setNumber(e.target.value)
  }

  // THIS FUNCTION IS ONLY USED TO CAUSE A RE-RENDER OF THE COMPONENT
  const Increment = (e) => {
    e.preventDefault()
    setInc((prevState) => {
      return prevState + 1
    })
  }

  // THIS FUNCTION RESETS THE FORM
  const clearForm = (e) => {
    e.preventDefault()
    setNumber(1)
    setInc(0)
    renders.current = 1
  }

  return (
    <div>
      <form onSubmit={Increment} className='row g-3'>
        <div className='col-md-4'>
          <label className='form-label'>Number</label>
          <input
            value={number}
            onChange={Test}
            type='number'
            className='form-control'
          />
        </div>
        <div className='col-md-12'>
          <h3>
            The square root of {number} is {sqrt}.
          </h3>
        </div>
        <div className='col-12'>
          <button onClick={Increment} className='btn btn-primary me-4'>
            Increment
          </button>
          <button onClick={clearForm} className='btn btn-secondary'>
            Clear
          </button>
        </div>
      </form>
      <h3>Renders : {renders.current}</h3>
    </div>
  )
}
function getSqrt(n) {
  for (let i = 0; i <= 1000; i++) {
    console.log("i: ", i)
  }
  console.clear()
  console.log("Expensive Function Called!")
  return Math.sqrt(n)
}
export default UseMemoExample
