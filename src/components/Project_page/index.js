import React from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom';
import Loader from 'react-loaders'

const ProjectPage = () => {

    const navigate = useNavigate();

    const handleNavigateToFormPage = () => {
        navigate('/project');
    };

  return (
    <>
    <div className='project-showcase'>
        <div class="back_btn" onClick={handleNavigateToFormPage}>
            Back
        </div>
        <div class="parallax-image parallax-image-01"></div>
        <section>
            <a target="_blank" rel="noreferrer" href="https://cars-eob2.vercel.app/">
                <h2>Car Showcase</h2>
            </a>
            <p>A simple page made with NextJs and Tailwind CSS where you can search cars based on model, brand, year, fuel type. Get all the required information about the car and price for rental purpose. Used rapidAPI for the details and pictures of the cars.</p>
        </section>
        <div class="parallax-image parallax-image-02"></div>
        <section>
            <a target="_blank" rel="noreferrer" href="https://eshanpokhrel.com.np/" >
                <h2>Personal Portfolio</h2>
            </a>
            <p>A personal portfolio made with React and SCSS, showcasing all the projects and skills that I possess. With my contact information and everything you need to know about me. Used animate.css for the animation and applied SVG animation.</p>
        </section>
        <div class="parallax-image parallax-image-03"></div>
        <section>
            <a target="_blank" rel="noreferrer" href="https://eshanpokhrel.github.io/clock/">
                <h2>Clock</h2>
            </a>
            <p>Analog and digital clock made in vanilla javascript with CSS. Used multiple date methods, and learned about the variable and calc methods in CSS and applied them in this project.</p>
        </section>
        <div class="parallax-image parallax-image-04"></div>
        <section>
            <a target="_blank" rel="noreferrer" href="https://eshanpokhrel.github.io/kanban/">
                <h2>Kanban</h2>
            </a>
            <p>A simple kanaban prototype where you can list your tasks track your progress, using the drag and drop feature, placing the task in one of the boards either its assigned or in-progress or completed. </p>
        </section>
        <div class="parallax-image parallax-image-05"></div>
        <section>
            <a target="_blank" rel="noreferrer" href="https://movie-app-one-lilac.vercel.app/">
                <h2>Movies Search Page</h2>
            </a>
            <p>A movie searching page made with React and use material ui for designing different components, where one can search for the movies and get details about it and also get the torrent link to download the movie. It is a clone of the yts.mx movie search page using its own API. Different filters like quality, genre, rating, etc, are provided to make the search easier.</p>
        </section>
        <div class="parallax-image parallax-image-06"></div>
        <section>
            <a target="_blank" rel="noreferrer" href="https://eshanpokhrel.github.io/MeomoryGame/">
                <h2>Brain Blitz</h2>
            </a>
            <p>It is a memory testing game where you have to match the pictures of two same fruits and do so to all of it to complete the game, and the time will be recorded and the best time will be saved as the highscore using the local storage. Its made with vanilla javascript and css and also has sound effects. </p>
        </section>
        <div class="parallax-image parallax-image-07"></div>
        <section>
            <a target="_blank" rel="noreferrer" href="https://gpt-3-jet.vercel.app/">
                <h2>GPT-3</h2>
            </a>
            <p>A GPT-3 landing page made with React. It is a full implementation of a Figma design, responsive for all devices, utilized the concepts of components, props, etc. for rendering the repeated objects in the page.</p>
        </section>
        <div class="parallax-image parallax-image-08"></div>
        <section>
            <a target="_blank" rel="noreferrer" href="https://eshanpokhrel.github.io/quizGame/">
                <h2>Quiz Game</h2>
            </a>
            <p>It is a quiz game made with vanilla javascript and css where you are given 15 second time to answer a question with multiple options present and get the result of the quiz at the end once you complee the quiz. </p>
        </section>
        <div class="parallax-image parallax-image-09"></div>
        <section>
            <a target="_blank" rel="noreferrer" href="https://eshanpokhrel.github.io/TicTacToe/">
                <h2>Tic Tac Toe</h2>
            </a>
            <p>It is a simple two palyer game made with vanilla javascript and css containing different aniamtions, where both palyers get their turns to place their symbol ans first one to get 3 in a line wins.</p>
        </section>
        <footer>
        <p>
            *To view all of my recent projects visit my github profile.*
        </p>
        </footer>
    </div>
    <Loader type='ball-rotate'/>
    </>
  )
}

export default ProjectPage
