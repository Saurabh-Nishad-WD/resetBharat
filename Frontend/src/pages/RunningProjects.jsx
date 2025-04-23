import React from 'react'
import RunningProjectCard from '../components/RunningProjectCard'

const RunningProjects = () => {
  return (
    <div>
       <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-green-800 mb-6">🌱 Upcoming Projects</h1>
    
    <span className="grid grid-cols-1 md:grid-cols-2 gap-6">
     
 <RunningProjectCard/>
 <RunningProjectCard/>
 <RunningProjectCard/>
 <RunningProjectCard/>
 <RunningProjectCard/>

    </span>
  </div>
    </div>
  )
}

export default RunningProjects
