import React, { useState } from "react";
import "./Contact.css";
function Contact() {
  const access_key = import.meta.env.VITE_WEB_ACCESS_KEY;
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", access_key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <h1 className="contact-title">Get in touch</h1>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets Talk</h1>
          <p>
            I am Currently available to take any project , So Feel Free to Link
            Up... Hit my Email or Phone
          </p>
          <div className="contact-details">
            <p>linusngetich78@gmail.com</p>
            <p>0719200522</p>
            <p>Nakuru, Kenya</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="John Doe" name="name" required />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            required
          />
          <label htmlFor="">Write your message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          >
            {" "}
          </textarea>
          <div className="submission">
            <button className="submit-btn" type="submit">
              Submit now
            </button>{" "}
            <span>{result}</span>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
