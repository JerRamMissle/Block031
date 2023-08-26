import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Posts from './pages/posts'
import Profile from './pages/profile'
import Login from './pages/login'
import Register from './pages/register'
import NavBar from './Components/NavBar'
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [count, setCount] = useState(0)
  const COHORT_NAME = '2209-FTB-ET-WEB-FT'
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

  return (

    <div>
      <NavBar token={token} setToken={setToken} />
      <Routes>
        <Route path="/posts" element={<Posts token={token} />} />
        <Route path="/profile" element={<Profile token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/Register" element={<Register setToken={setToken} />} />
      </Routes>
      blloobs
    </div>

  )
}

export default App
