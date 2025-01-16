import React from 'react'
import './Service.css'
import services from '../../assets/services.json'
function Service() {
  return (
    <div className='service' >
        <div className='service-title' ><h1>My service </h1> </div>
        <div className='service-container'>
            {
                services.map((item)=>(
                    <div className='service-item' key={item.id} >
                    <h2>{item.id} </h2>
                    <h3>{item.sname} </h3>
                    <p> {item.sdesc} </p>
                    <p>Read More</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
export default Service