import React from 'react'
import './LogoutFormStyle.css'

const LogoutForm = () => {
  return (
    <div className="form" >
    <h1>Logout Form</h1>
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="5" placeholder="Type Your Feedback here"/>
            <button className="btn">Logout</button>
        </form>
    </div>
  )
}

export default LogoutForm