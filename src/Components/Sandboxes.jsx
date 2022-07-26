import { Link } from "react-router-dom"
import { GiHook } from "react-icons/gi"

function Sandboxes() {
  return (
    <div className='container'>
      <div className='container'>
        <GiHook
          fontSize='2.75em'
          className='bi text-muted flex-shrink-0 me-1'
        />
        <h2 className='pb-4 border-bottom'>React Hooks</h2>
      </div>
      <div className='row'>
        <div className='col-4 g-3'>
          <Link to='/UseRef' className='text-reset text-decoration-none'>
            <div className='col align-items-start'>
              <div>
                <h4 className='fw-bold mb-0'>useRef Hook</h4>
                <p>
                  This hook returns an object whose <code>.current</code>
                  property is the DOM element referenced in the function. The
                  returned object will persist for the full lifetime of the
                  component.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className='col-4 g-3'>
          <Link to='/UseMemo' className='text-reset text-decoration-none'>
            <div className='col d-flex align-items-start'>
              <div>
                <h4 className='fw-bold mb-0'>useMemo Hook</h4>
                <p>
                  This hook will only recompute the memoized value when one of
                  the dependencies has changed. This optimization helps to avoid
                  expensive calculations on every render.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Sandboxes
