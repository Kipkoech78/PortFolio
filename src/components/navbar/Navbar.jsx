import React from 'react'
import logo from '../../assets/logo.jpg'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar' >
    <img src={logo} alt='' />
    <ul className='navMenu'>
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Skill</li>
        <li>Tools</li>
        <li>Contact</li>

    </ul>
    <div className='nav-connect' > Connect with Me</div>
    </div>
  )
}

export default Navbar