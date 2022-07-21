import Sandboxes from "../Components/Sandboxes"
function Home() {
  return (
    <div className='px-4 py-5 my-5 text-center'>
      <img
        className='d-block mx-auto mb-4'
        src='/logo192.png'
        alt='React'
        width='150'
        height='150'
      />
      <h1 className='display-5 fw-bold'>React Sandbox</h1>
      <div className='col-lg-6 mx-auto'>
        <p className='lead mb-4'>
          This is a sandbox for learning React hooks, principals, and testing
          new functions that will be implemented in other projects. This site is
          built using the Bootstrap styled components.
        </p>
      </div>
      <Sandboxes />
    </div>
  )
}
export default Home
