import Loader from 'react-loaders'
import './index.scss'
import movie from '../../assets/images/movie.png'
import cars from '../../assets/images/cars.png'
import gpt3 from '../../assets/images/gpt3.png'
// import quiz from '../../assets/images/quiz.png'
import memory from '../../assets/images/memory.png'

import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Cards from '../../Cards'

const Project = () => {

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
          <a href="https://cars-eob2.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Cards imgUrl={cars} title={"Cars"} desc="A web application where you can search for cars through different filters like brand, model, fuel-type, year. "/>
          </a>
          <a href="https://gpt-3-jet.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Cards imgUrl={gpt3} title={"GPT-3"} desc="A figma design implementation of a landing page of GPT-3. "/>
          </a>
          {/* <a href="https://eshanpokhrel.github.io/quizGame/" target="_blank" rel="noopener noreferrer">
            <Cards imgUrl={quiz} title={"Quiz"} desc="A simple and fun quiz app made from HTML5, CSS3 and Javascript to enhance your knowledge. "/>
          </a> */}
          <a href="https://eshanpokhrel.github.io/MeomoryGame/" target="_blank" rel="noopener noreferrer">
            <Cards imgUrl={memory} title={"Brain Blitz"} desc="A fun game where you have to match all of the same fruits to win, but the time is running out."/>
          </a>
          <div>
            <a href="https://github.com/Eshanpokhrel?tab=repositories" target="_blank" rel="noopener noreferrer">
              <button className='more-button'>Show More</button>
            </a>
          </div>
        </div>
      </div>
      <Loader type='line-spin-fade-loader'/>
    </>
  )
}

export default Project
