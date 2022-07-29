import { Link, useLocation } from "react-router-dom"

function Navigation() {
  const path = useLocation().pathname
  return (
    <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
      <li>
        <Link
          to='/'
          className={`nav-link px-2 text-${
            path === "/" ? "secondary" : "white"
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to='/UseRef'
          className={`nav-link px-2 text-${
            path === "/UseRef" ? "secondary" : "white"
          }`}
        >
          useRef
        </Link>
      </li>
      <li>
        <Link
          to='/UseMemo'
          className={`nav-link px-2 text-${
            path === "/UseMemo" ? "secondary" : "white"
          }`}
        >
          useMemo
        </Link>
      </li>
      <li>
        <Link
          to='/UseCallback'
          className={`nav-link px-2 text-${
            path === "/UseCallback" ? "secondary" : "white"
          }`}
        >
          useCallback
        </Link>
      </li>
      <li>
        <Link
          to='/UseFetch'
          className={`nav-link px-2 text-${
            path === "/UseFetch" ? "secondary" : "white"
          }`}
        >
          useCallback
        </Link>
      </li>
    </ul>
  )
}
export default Navigation
