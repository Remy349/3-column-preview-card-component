import React from 'react'
import { Card } from './components/Card'

import sedansIcon from './images/icon-sedans.svg'
import suvsIcon from './images/icon-suvs.svg'
import luxuryIcon from './images/icon-luxury.svg'

function App () {
  return (
    <main className='main'>
      <div className='cards'>
        <div className='cards__container'>
          <Card
            icon={sedansIcon}
            title='Sedans'
            description='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
            color='orange'
          />
          <Card
            icon={suvsIcon}
            title='SUVs'
            description='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
            color='dark-cyan'
          />
          <Card
            icon={luxuryIcon}
            title='Luxury'
            description='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
            color='very-dark-cyan'
          />
        </div>
      </div>
    </main>
  )
}

export default App
