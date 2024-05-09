import Loader from 'react-loaders'
import './index.scss'
import movie from '../../assets/images/movie.png'
import gpt3 from '../../assets/images/gpt3.png'

import iPhone from '../../assets/images/iP-15.png'
import helou from '../../assets/images/helou.png'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Cards from '../../Cards'
import { useNavigate } from 'react-router-dom'

const Project = () => {

  const navigate = useNavigate();

  const handleNavigateToFormPage = () => {
    navigate('/projectPage');
  };

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
      return () => setTimeout(() => {
        setLetterClass("text-animate-hover")
      },3000)
    },[])

  return (
    <>
      <div className='container project-page'>
        <div className="text-zone">
          <h1>
            <AnimatedLetters strArray={['P','r','o','j','e','c','t','s']} idx={15} letterClass={letterClass}/>
          </h1>
          <p>
            Welcome to the Project Section of my portfolio, a curated collection of endeavors showcasing my creativity, problem-solving prowess, and dedication to excellence. Each project reflects my commitment to innovation and my passion for bringing ideas to fruition. Join me on this journey of exploration and discovery as we delve into the world of possibilities together.
          </p>
        </div>
        <div className="project-container">
          <a href="https://movie-app-one-lilac.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Cards imgUrl={movie} title={"Movies"} desc="A web application where you can search movies and get torrent links to download the movies. "/>
          </a>
          <a href="https://helou.onrender.com/" target="_blank" rel="noopener noreferrer">
            <Cards imgUrl={helou} title={"helou"} desc="A fullstack application where you can chat in real time, made with MERN Stack and Socketio."/>
          </a>
          <a href="https://gpt-3-jet.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Cards imgUrl={gpt3} title={"GPT-3"} desc="A figma design implementation of a landing page of GPT-3. "/>
          </a>
          <a href="https://iphone-15-pro-six.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Cards imgUrl={iPhone} title={"iPhone 15 Pro"} desc="A clone of Apple's new iPhone's website using React, Tailwind, GSAP and ThreeJs."/>
          </a>
          <div>
            <button onClick={handleNavigateToFormPage} className='more-button'>Show More</button>
          </div>
        </div>
      </div>
      <Loader type='line-spin-fade-loader'/>
    </>
  )
}

export default Project
