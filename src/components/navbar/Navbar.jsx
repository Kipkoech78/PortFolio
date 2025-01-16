import React, { useState } from 'react'
import logo from '../../assets/logo.jpg'
import './Navbar.css'
import line from '../../assets/brush-line.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Navbar() {
  const [menu, setMenu] = useState("home")
  return (
    <div className='navbar' >
    <img className='image-logo' src={logo} alt='' />
    <ul className='navMenu'>
        <li> <AnchorLink className='anchorLink'  href='#home'>  <p onClick={(()=> setMenu("home"))}> Home </p></AnchorLink>  {menu ==="home" ? <img src={line} /> : <></> } </li>
        <li  ><AnchorLink className='anchorLink' offset={50} href='#about' ><p  onClick={(()=> setMenu("about"))}>About me</p> </AnchorLink> {menu ==="about" ? <img src={line} /> : <></> } </li>
        <li><AnchorLink className='anchorLink' offset={50} href='#services'> <p onClick={(()=> setMenu("services"))}>services</p></AnchorLink>  {menu ==="services" ? <img src={line} /> : <></> } </li>
        <li><AnchorLink className='anchorLink' offset={50} href='#projects'> <p onClick={(()=> setMenu("tools"))}>Projects</p> </AnchorLink> {menu ==="tools" ? <img src={line} /> : <></> } </li>
        <li><AnchorLink className='anchorLink' offset={50} href='#contact'> <p onClick={(()=> setMenu("contact"))}>contact</p> </AnchorLink> {menu ==="contact" ? <img src={line} /> : <></> } </li>

    </ul>
    <div className='nav-connect' > <AnchorLink className='anchorLink' href='#contact' offset={50} >Connect with Me </AnchorLink> </div>
    </div>
  )
}

export default Navbar