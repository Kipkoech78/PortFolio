import React, { useRef, useState } from 'react'
import logo from '../../assets/logo.jpg'
import './Navbar.css'
import menuicon from '../../assets/menu.png'
import CloseIcon from '@mui/icons-material/Close';
import closingIcon from '../../assets/delete.png'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import line from '../../assets/brush-line.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Navbar() {
  const [menu, setMenu] = useState("home")
  const menuRef = useRef();
  const openMenu = (()=>{
    menuRef.current.style.right = '0'

  })
  const closeMenu = (()=>{
    menuRef.current.style.right = '-350px'
    
  })
  return (
    <div className='navbar' >
    <img className='image-logo' src={logo} alt='' />
  
    {/* <img onClick={openMenu} className='menu-logo' src={menuicon} alt='' /> */}
    <ul ref={menuRef} className='navMenu'>
    {/* <img onClick={closeMenu} src={closingIcon} /> */}
    <div  onClick={closeMenu}   className='closeIcon' ><CloseIcon /></div>
        <li> <AnchorLink className='anchorLink'  href='#home'>  <p onClick={(()=> setMenu("home"))}> Home </p></AnchorLink>  {menu ==="home" ? <img  className='lineImg'  src={line} /> : <></> } </li>
        <li  ><AnchorLink className='anchorLink' offset={50} href='#about' ><p  onClick={(()=> setMenu("about"))}>About me</p> </AnchorLink> {menu ==="about" ? <img className='lineImg'  src={line} /> : <></> } </li>
        <li><AnchorLink className='anchorLink' offset={50} href='#services'> <p onClick={(()=> setMenu("services"))}>services</p></AnchorLink>  {menu ==="services" ? <img className='lineImg' src={line} /> : <></> } </li>
        <li><AnchorLink className='anchorLink' offset={50} href='#projects'> <p onClick={(()=> setMenu("tools"))}>Projects</p> </AnchorLink> {menu ==="tools" ? <img src={line} /> : <></> } </li>
        <li><AnchorLink className='anchorLink' offset={50} href='#contact'> <p onClick={(()=> setMenu("contact"))}>contact</p> </AnchorLink> {menu ==="contact" ? <img className='lineImg'  src={line} /> : <></> } </li>

    </ul>
    <div className='nav-connect' > <AnchorLink className='anchorLink' href='#contact' offset={50} >Connect with Me </AnchorLink> </div>
    <div  onClick={openMenu}  className='menu-logo' > <MenuOpenIcon fontSize='large' /></div>
    </div>
   
  )
}

export default Navbar