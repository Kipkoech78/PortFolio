import React from 'react'
import './Service.css'
import services from '../../assets/services.json'

function Service() {
  return (
    <div id='services' className='service'>
      <div className='service-title'><h1>What I Do</h1></div>
      <div className='service-container'>
        {services.map((item) => (
          <div className='service-item' key={item.id}>
            <h2>{String(item.id).padStart(2, '0')}</h2>
            <h3>{item.sname}</h3>
            <p>{item.sdesc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service