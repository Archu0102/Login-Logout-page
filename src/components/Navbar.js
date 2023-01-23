import './NavbarStyle.css'
import React, { useState } from 'react'
import {FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaBars} from 'react-icons/fa'
// import { GiHamburgerMenu} from 'react-icons/fa';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className='main-nav'>
        <div className='logo'>
          <h2>
            <span>A</span>rchana
            <span>S</span>harma
          </h2>
        </div>

          <div className= {showMediaIcons ? 'menu-link' : 'menu-link'} >
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
                <a className='facebook' href='#'><FaFacebookSquare /></a>
              </li>
              <li>
                <a className='instagram' href='#'><FaInstagramSquare/></a>
              </li>
              <li>
                <a href='#'><FaLinkedinIn size={25} style = {{color: "blue"}} /></a>
              </li>
            </ul>
              <div className='hamburger-menu'>
                <a href='#' onClick={() => setShowMediaIcons(!showMediaIcons)}><FaBars size={25} style={{color: "black"}}/></a>
              </div>
          </div>
      </nav>
        <div className='welcom'>
          <p>Welcom to</p>
          <h2>Archana's Website</h2>
        </div>
    </>
  )
}

export default Navbar