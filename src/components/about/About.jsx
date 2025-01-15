import React from 'react'
import './About.css'
import profileImg from '../../assets/profile-image.jpg'
function About() {
  return (
    <div className='about'>
    <div className='about-title'><h1>About me</h1></div>
    <div className='about-sections' >
        <div className='about-left'>
            <img src={profileImg} alt />
        </div>
        <div className='about-right' >
        <div className='about-paragraph' >
            <p>Deep Code Understanding
            IntelliJ IDEA knows everything about your code and uses this knowledge to 
            offer blazing fast navigation and an intelligent experience by providing relevant 
            suggestions in every context.</p>
            <p>
            Empowering enterprise development workflows
            We meet the needs of enterprises at every stage, from design 
            and development, to testing, and all the way through to deployment.
            </p>
        </div>
        <div className='about-skills'>
        <div className='about-skill' > <p>React js</p> <hr style={{width: '90%'}} /> </div>
        <div className='about-skill' > <p>Kotlin </p> <hr style={{width: '80%'}} /> </div>
        <div className='about-skill' > <p>Javascript </p> <hr style={{width: '70%'}} /> </div>
        <div className='about-skill' > <p>Java </p> <hr style={{width: '60%'}} /> </div>
        <div className='about-skill' > <p>MYSQL </p> <hr style={{width: '60%'}} /> </div>
        <div className='about-skill' > <p>HTML & CSS </p> <hr style={{width: '50%'}} /> </div>
        </div>
        </div>
    </div>
    <div className='about-achievements' >
        <div className='about-achievement' >
            <h1>4+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className='about-achievement' >
            <h1>80+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
     
    </div>


    </div>
  )
}

export default About