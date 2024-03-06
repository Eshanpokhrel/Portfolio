import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../src/assets/images/logo-s.png'
import LogoSubtitle from '../../src/assets/images/logo_sub.png'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faGears, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {

  const [showNav, setShowNav] = useState(false);

  return (
    <div className='nav-bar'>
      <Link className='logo' to='/' onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="logo" />
        <img className='sub-logo' src={LogoSubtitle} alt="logo-sub" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact='true' activeclassname='active' to='/' onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} color='black'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='about-link' to='/about' onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faUser} color='black'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='project-link' to='/project' onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faGears} color='black'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact' onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faEnvelope} color='black'/>
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' 
        />
      </nav>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
      <ul >
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/eshan-pokhrel-109b15163/' onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faLinkedin} color='#0a66c2'/>
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/Eshanpokhrel' onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faGithub} color='black'/>
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.facebook.com/eshan.pokhrel.5' onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faFacebook} color='#0866ff'/>
            </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
