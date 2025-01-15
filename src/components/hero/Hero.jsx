import React from 'react'
import  './Hero.css'
import profileImg from '../../assets/profile-image.jpg'
function Hero() {
  return (
    <div className='hero'>
    <img src={profileImg} alt=''/>
    <h1><span>I am Kipkoech Linus</span> a Android Developer and FullStack web Developer</h1>
    <p> I am From Kericho,Kenya with 3years experience in Web development and a 1 year experience in Android development </p>
    <div className='hero-action'>
    <div className='hero-con' >Connect with me</div>
    <div className='hero-resume' >My Resume</div>

    </div>

    </div>
  )
}

export default Hero