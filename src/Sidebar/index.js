import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../src/assets/images/E.png'
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
            <FontAwesomeIcon icon={faHome} color='rgba(243, 245, 247, 0.36)'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='about-link' to='/about' onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faUser} color='rgba(243, 245, 247, 0.36)'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='project-link' to='/project' onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faGears} color='rgba(243, 245, 247, 0.36)'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact' onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faEnvelope} color='rgba(243, 245, 247, 0.36)'/>
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' 
        />
      </nav>
      <ul >
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/eshan-pokhrel-109b15163/' >
                <FontAwesomeIcon icon={faLinkedin} color='#0a66c2'/>
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/Eshanpokhrel' >
                <FontAwesomeIcon icon={faGithub} color='white'/>
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.facebook.com/eshan.pokhrel.5' >
                <FontAwesomeIcon icon={faFacebook} color='#0866ff'/>
            </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
