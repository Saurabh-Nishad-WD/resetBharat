import React from 'react'
import UpcomingProjectCard from '../components/UpcommingEvent_Card'

const FuturePlans = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-green-800 mb-6">🌱 Upcoming Projects</h1>
    
    <span className="grid grid-cols-1 md:grid-cols-2 gap-6">
     
        <UpcomingProjectCard  />
        <UpcomingProjectCard  />
        <UpcomingProjectCard  />
        <UpcomingProjectCard  />
        <UpcomingProjectCard  />

    </span>
  </div>
  )
}

export default FuturePlans
