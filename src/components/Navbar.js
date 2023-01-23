import './NavbarStyle.css'
import React from 'react'
import {FaFacebookSquare, FaInstagramSquare, FaLinkedinIn} from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <nav className='main-nav'>
        <div className='logo'>
          <h2>
            <span>A</span>rchana
            <span>S</span>harma
          </h2>
        </div>

          <div className='menu-link'>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/loginpage'>Login</a>
              </li>
              <li>
                <a href='/logoutpage'>Logout</a>
              </li>
            </ul>
          </div>

          <div className='social-media'>
            <ul className='social-media-desctop'>
              <li>
                <a href='#'><FaFacebookSquare/></a>
              </li>
              <li>
                <a href='#'><FaInstagramSquare/></a>
              </li>
              <li>
                <a href='#'><FaLinkedinIn/></a>
              </li>
            </ul>
          </div>
      </nav>
        <section>
          <p>Welcom to</p>
          <h2>Archana's Website</h2>
        </section>
    </>
  )
}

export default Navbar