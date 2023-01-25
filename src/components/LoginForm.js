import './LoginFormStyle.css'
import React from 'react'

const Form = () => {
  return (
    <div className="form" >
    <h1>Login Form</h1>
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="5" placeholder="Type Your Massage here"/>
            <button className="btn">Login</button>
        </form>
    </div>
  )
}

export default Form