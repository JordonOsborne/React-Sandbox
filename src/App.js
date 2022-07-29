import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import UseRef from "./Pages/UseRef"
import UseMemo from "./Pages/UseMemo"
import UseCallback from "./Pages/UseCallback"
import UseFetch from "./Pages/UseFetch"
import NotFound from "./Pages/NotFound"
import "./App.css"

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='container mt-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/useRef' element={<UseRef />} />
            <Route path='/useMemo' element={<UseMemo />} />
            <Route path='/useCallback' element={<UseCallback />} />
            <Route path='/useFetch' element={<UseFetch />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
