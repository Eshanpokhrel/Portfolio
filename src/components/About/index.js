import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import tailwindL from '../../assets/images/tw.png'
import React, { useEffect, useState } from 'react'
import {  faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return () => setTimeout(() => {
          setLetterClass("text-animate-hover")
        },3000)
      },[])

  return (
    <>
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']} idx={15}/>
                </h1>
                <p>I'm a very ambitious front-end enthusiast looking for a role in an IT company with the opportunity to work on challenging and diverse projects.</p>
                <p>With my skills in technologies like <i><b style={{color:"yellow"}}>JS, CSS, React, Next.js, Tailwind, Git,</b></i> I bring a dynamic edge to web development. Let's collaborate to build something extraordinary together.</p>
                <p>I'm quietly confident, naturally curious and prepetually working on improving my chops one design problem at a time.</p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <img src={tailwindL} alt="tailwind" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color='#28a4d9'/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faReact} color='#5ed4f4'/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color='#efd81d'/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faHtml5} color='#f06529'/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color='#ec4828'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='ball-clip-rotate-multiple'/>
    </>
  )
}

export default About
