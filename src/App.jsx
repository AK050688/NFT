import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route,Routes  } from 'react-router-dom'
import NavBar from './Component/NavBar'
import Home from './Component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className="bg-[#000]"> */}
<Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

</Router>
{/* </div> */}
    </>
  )
}

export default App
