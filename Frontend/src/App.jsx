import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import FuturePlans from './pages/FuturePlans'
import RunningProjects from './pages/RunningProjects'
import CompletedProjects from './pages/CompletedProjects'
import JoinUsPage from './pages/JoinUs'
import DonatePage from './pages/Donate'
import AboutPage from './pages/About'
import AchievementsSection from './pages/Achievement'

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
          <Route path="/joinus" element={<JoinUsPage/>}/>
          <Route path="/donate" element={<DonatePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/achievments" element={<AchievementsSection/>}/>
        </Routes>
    </>
  )
}

export default App
