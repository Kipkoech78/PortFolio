import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='contact'>
    <h1 className='contact-title' >Contact Me</h1>
    <div className='contact-section' >
    <div className='contact-left' > 
    <h1>
    Lets Talk
    </h1>
    <p>I am Currently available to take any project , So Feel Free to Link Up... Hit my Email or Phone</p>
    <div className='contact-details' >
        <p>linusngetich78@gmail.com</p>
        <p>0719200522</p>
        <p>Nakuru, Kenya</p>
    </div>
    </div>
        <form className='contact-right'>
            <label htmlFor='' >Your Name</label>
            <input type='text' placeholder='John Doe' name='name' />
            <label htmlFor='' >Your Email</label>
            <input type='email' placeholder='example@gmail.com' name='email' />
            <label htmlFor='' >Write your message</label>
            <textarea name='message' rows='6' placeholder='Enter your message' > </textarea>
            <button className='submit-btn' type='submit'  >Submit now</button>
        </form>
    </div>
    </div>
  )
}

export default Contact