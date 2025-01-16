import React from 'react'
import './Footer.css'
import footerImg from '../../assets/hero-devices.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <div className='footer'>
    <div  className='footer-top' >
    <img src={footerImg} />
    <h1 className='footer-desc' >Living, learning, & leveling up one day at a time.</h1>
    <p>&copy; Kipkoech Linus. All rights reserved </p>
    <div className='footer-icons' >
    <FacebookIcon />
    <InstagramIcon />
    <GitHubIcon />
    <XIcon />
    <LinkedInIcon />
    
    </div>

    </div>
    </div>
  )
}

export default Footer