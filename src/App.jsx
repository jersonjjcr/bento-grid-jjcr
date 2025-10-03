import React from 'react'
import './App.css'
import BrandCard from './components/BrandCard'
import TaskCard from './components/TaskCard'
import ServicesCard from './components/ServicesCard'
import CalendarCard from './components/CalendarCard'
import ProfilesCard from './components/ProfilesCard'
import PriceCard from './components/PriceCard'
import BrandMessageCard from './components/BrandMessageCard'

function App() {
  return (
    <div className="app">
      <div className="bento-grid">
        <div className="grid-item brand-item">
          <BrandCard />
        </div>
        
        <div className="grid-item calendar-item">
          <CalendarCard />
        </div>
        
        <div className="grid-item profiles-item">
          <ProfilesCard />
        </div>
        
        <div className="grid-item price-item">
          <PriceCard />
        </div>
        
        <div className="grid-item services-item">
          <ServicesCard />
        </div>
        
        <div className="grid-item brand-message-item">
          <BrandMessageCard />
        </div>
        
        <div className="grid-item task-item">
          <TaskCard />
        </div>
      </div>
    </div>
  )
}

export default App
