import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import FuturePlans from './pages/FuturePlans'
import RunningProjects from './pages/RunningProjects'
import CompletedProjects from './pages/CompletedProjects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/future-plans" element={<FuturePlans/>}/>
          <Route path="/running-projects" element={<RunningProjects/>}/>
          <Route path="/completed-projects" element={<CompletedProjects/>}/>
        </Routes>
    </>
  )
}

export default App
