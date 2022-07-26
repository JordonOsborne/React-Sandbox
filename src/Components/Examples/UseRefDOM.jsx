import { useRef } from "react"

function useRefDOM() {
  const numberInput = useRef()
  const numberValidation = useRef()
  const textInput = useRef()
  const textValidation = useRef()
  const onSubmit = (e) => {
    e.preventDefault()
    // CHECK IF NUMBER
    if (isNaN(numberInput.current.value) === false) {
      numberInput.current.className = "form-control is-valid"
      numberValidation.current.innerText = "This is a number!"
      numberValidation.current.className = "valid-feedback"
    } else {
      numberInput.current.className = "form-control is-invalid"
      numberValidation.current.innerText =
        "This is a " + typeof numberInput.current.value + "."
      numberValidation.current.className = "invalid-feedback"
    }
    // CHECK IF TEXT
    if (isNaN(textInput.current.value) === true) {
      textInput.current.className = "form-control is-valid"
      textValidation.current.innerText = "This is text!"
      textValidation.current.className = "valid-feedback"
    } else {
      textInput.current.className = "form-control is-invalid"
      textValidation.current.innerText = "This is a number."
      textValidation.current.className = "invalid-feedback"
    }
  }
  const clearForm = (e) => {
    e.preventDefault()
    numberInput.current.value = ""
    textInput.current.value = ""
    numberInput.current.className = "form-control"
    textInput.current.className = "form-control"
  }
  return (
    <div className='mb-4'>
      <h1 className='text-center'>Create DOM Reference</h1>
      <p className='lead text-center'>
        This hook can be used for referencing DOM element data without the use
        of 'State'. An example is shown below where the numberInput is validated
        when the submit button is clicked.
        <br />
        The best use case for this hook is when you are needing to update the
        'referenced' DOM element without re-rendering the entire component. An
        example would be numberInput numberValidation like in the example below.
      </p>
      <p className='text-center fw-semibold mt-4'>
        Note: That useRef must be used for every component needing to be changed
        because the component is NOT re-rendering.
      </p>
      <form onSubmit={onSubmit} className='row g-3' id='Form'>
        <div className='col-md-4'>
          <label htmlFor='Number' className='form-label'>
            Number
          </label>
          <input type='text' ref={numberInput} className='form-control' />
          <div ref={numberValidation}></div>
        </div>
        <div className='col-md-4'>
          <label htmlFor='Text' className='form-label'>
            Text
          </label>
          <input type='text' ref={textInput} className='form-control' />
          <div ref={textValidation}></div>
        </div>
        <div className='col-12'>
          <button type='submit' form='Form' className='btn btn-primary me-4'>
            Submit
          </button>
          <button onClick={clearForm} className='btn btn-secondary'>
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}
export default useRefDOM
