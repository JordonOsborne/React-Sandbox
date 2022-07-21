import Navigation from "./Navigation"
import Logo from "./Logo"

function Header() {
  return (
    <header className='p-3 bg-dark text-white'>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  )
}
export default Header
