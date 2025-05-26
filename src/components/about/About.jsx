import React from 'react'
import './About.css'
import profileImg from '../../assets/profile-image.jpg'
function About() {
  return (
    <div id='about' className='about'>
    <div className='about-title'><h1>About me</h1></div>
    <div className='about-sections' >
        <div className='about-left'>
            <img src={profileImg} alt />
        </div>
        <div className='about-right' >
        <div className='about-paragraph' >
            <p>

I am a passionate and detail-oriented system developer with a strong foundation in both frontend and backend development. On the frontend, I work confidently with React.js, TypeScript, and Material UI to build responsive and intuitive user interfaces. I enjoy transforming design concepts into functional and visually appealing web and mobile experiences using modern UI patterns and best practices. On mobile, I specialize in Kotlin with Jetpack Compose, creating smooth and interactive Android applications.

</p>
            <p>
           
On the backend, I have hands-on experience with Node.js, Express, and relational databases like PostgreSQL, along with NoSQL solutions such as Firebase/Firestore. I’m skilled in building RESTful APIs and integrating them securely and efficiently. With strong problem-solving skills, a collaborative mindset, and an eagerness to learn, I bring versatility and commitment to every development team I join.


            </p>
        </div>
        <div className='about-skills'>
        <div className='about-skill' > <p>React js</p> <hr style={{width: '90%'}} /> </div>
        <div className='about-skill' > <p>Kotlin </p> <hr style={{width: '85%'}} /> </div>
        <div className='about-skill' > <p>Node,Express </p> <hr style={{width: '85%'}} /> </div>
        <div className='about-skill' > <p>MYSQL </p> <hr style={{width: '80%'}} /> </div>
        <div className='about-skill' > <p>Javascript </p> <hr style={{width: '70%'}} /> </div>
        <div className='about-skill' > <p>Java </p> <hr style={{width: '60%'}} /> </div>
        </div>
        </div>
    </div>
    <div className='about-achievements' >
        <div className='about-achievement' >
            <h1>4+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className='about-achievement' >
            <h1>25+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
        <div className='about-achievement' >
            <h1>50+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
    </div>


    </div>
  )
}

export default About