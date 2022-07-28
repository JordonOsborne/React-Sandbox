import React from "react"
// Example of how to wrap a component for the useCallback Hook

function Button({ action, type, text }) {
  return (
    <div className='col-2'>
      <button className={`btn btn-${type} d-block mx-auto`} onClick={action}>
        {text}
      </button>
    </div>
  )
}
export default React.memo(Button)
