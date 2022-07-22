import { Link } from "react-router-dom"
import { GiHook } from "react-icons/gi"

function Sandboxes() {
  return (
    <div className='container' id='icon-grid'>
      <div className='container d-flex'>
        <GiHook
          fontSize='2.75em'
          className='bi text-muted flex-shrink-0 me-1'
        />
        <h2 className='pb-4 border-bottom'>React Hooks</h2>
      </div>

      <Link
        to='/UseRef'
        className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 text-reset text-decoration-none'
      >
        <div className='col d-flex align-items-start'>
          <div>
            <h4 className='fw-bold mb-0'>useRef Hook</h4>
            <p>
              This hook returns an object whose <code>.current</code> property
              is the DOM element referenced in the function. The returned object
              will persist for the full lifetime of the component.
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default Sandboxes
