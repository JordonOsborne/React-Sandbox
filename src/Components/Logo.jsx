import { Link } from "react-router-dom"
function Logo() {
  return (
    <Link
      to='/'
      className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'
    >
      <img width='40' height='40' alt='React' src='/logo192.png' />
    </Link>
  )
}
export default Logo
