import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import Cards from '../../Cards'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import movie from '../../assets/images/movie.png'
import MBA from '../../assets/images/MBA.png'
import Mystic from '../../assets/images/Mystic.png'
import Epeak from '../../assets/images/Epeak.png'

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
          <a href="https://mystic-nepal.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Cards imgUrl={Mystic} title="Mystic Nepal Adventure" desc="A real world project made for Mystic Nepal Adventures, showcasing Himalayan treks and cultural tours. The responsive platform features intuitive navigation and secure booking, boosting user engagement. "/>
          </a>
          <a href="?">
            <Cards imgUrl={MBA} title="Market Basket Analysis" desc="A web application where you can perform market basket analysis with the help of the FP Growth algorithm."/>
          </a>
          <a href="https://iphone-15-pro-six.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Cards imgUrl={Epeak} title="Epeak Expedition" desc="A real world project made for Epeak Expedition, showcasing Himalayan treks and cultural tours. The responsive platform features intuitive navigation and secure booking, boosting user engagement."/>
          </a>
          <a href="https://movie-app-one-lilac.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Cards imgUrl={movie} title={"Movies"} desc="A web application where you can search movies, get details of the movies and get torrent links to download and direct links to download the movies. "/>
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
