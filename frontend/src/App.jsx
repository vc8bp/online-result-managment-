import { useState } from 'react'
import './App.css'
import Navbar from './component/NabBar'
import Home from './page/Home'
import { Route, Routes} from 'react-router-dom'
import Register from './page/Register'
import Login from './page/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
