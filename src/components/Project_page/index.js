import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from 'react-loaders'
import ProjectLayout from '../Project_Layout';
import helou from '../../assets/images/helou.png'
import movie from '../../assets/images/movie.png'
import cars from '../../assets/images/cars.png'
import gpt3 from '../../assets/images/gpt3.png'
import portfolio from '../../assets/images/portfolio.png'
import ttt from '../../assets/images/TTT.png'
import quiz from '../../assets/images/quiz.png'
import ip from '../../assets/images/iP-15.png'
import clock from '../../assets/images/Clock.png'
import brain from '../../assets/images/memory.png'
import kanban from '../../assets/images/Kanban.png'


const ProjectPage = () => {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    return () => clearTimeout(timer);
    }, []);
    

    const navigate = useNavigate();

    const handleNavigateToFormPage = () => {
        navigate('/project');
    };

  return (
    <>
    <div className='project-showcase'>
        {isVisible && 
            <div className="scroll-alert">
                <i class='bx bx-mouse bx-fade-up' ></i>
            </div>
        }
        <div class="back_btn" onClick={handleNavigateToFormPage}>
            Back
        </div>
       
       <ProjectLayout
        imgUrl={ helou }
        title={"helou (A real time chat app)"}
        link={"https://helou.onrender.com"}
        desc={"A fullstack chat application where you can chat in real time with the help of socket io, made with MERN Stack with TailwindCSS, DaisyUi, full secured application JWT and BcryptJS for authorization and password hashing with vary fast and optimized performance."}
        />
       <ProjectLayout
        imgUrl={ cars }
        title={"Car Showcase"}
        link={"https://cars-eob2.vercel.app/"}
        desc={"A simple page made with NextJs and Tailwind CSS where you can search cars based on model, brand, year, fuel type. Get all the required information about the car and price for rental purpose. Used rapidAPI for the details and pictures of the cars."}
        />
       <ProjectLayout
        imgUrl={ ip }
        title={"iPhone 15 Pro"}
        link={"https://iphone-15-pro-six.vercel.app/"}
        desc={"A clone of Apple's iPhone 15 Pro website, using React, Tailwind CSS, ThreeJs and GSAP with vite. It contains multiple scroll triggred animations, a 3D model of both 15 Pro and 15 Pro Max, which you can play with colors and move around to view from desired angle."}
        />
       <ProjectLayout
        imgUrl={ movie }
        title={"Movies Search Page"}
        link={"https://movie-app-one-lilac.vercel.app/"}
        desc={"A movie searching page made with React and use material ui for designing different components, where one can search for the movies and get details about it and also get the torrent link to download the movie. It is a clone of the yts.mx movie search page using its own API. Different filters like quality, genre, rating, etc, are provided to make the search easier."}
        />
       <ProjectLayout
        imgUrl={ gpt3 }
        title={"GPT-3"}
        link={"https://gpt-3-jet.vercel.app/"}
        desc={"A GPT-3 landing page made with React. It is a full implementation of a Figma design, responsive for all devices, utilized the concepts of components, props, etc. for rendering the repeated objects in the page."}
        />
       <ProjectLayout
        imgUrl={ quiz }
        title={"Quiz Game"}
        link={"https://eshanpokhrel.github.io/quizGame/"}
        desc={"It is a quiz game made with vanilla javascript and css where you are given 15 second time to answer a question with multiple options present and get the result of the quiz at the end once you complee the quiz."}
        />
       <ProjectLayout
        imgUrl={ portfolio }
        title={"Personal Portfolio"}
        link={"https://eshanpokhrel.com.np/"}
        desc={"A personal portfolio made with React and SCSS, showcasing all the projects and skills that I possess. With my contact information and everything you need to know about me. Used animate.css for the animation and applied SVG animation."}
        />
       <ProjectLayout
        imgUrl={ ttt }
        title={"Tic Tac Toe"}
        link={"https://eshanpokhrel.github.io/TicTacToe/"}
        desc={"It is a simple two palyer game made with vanilla javascript and css containing different aniamtions, where both palyers get their turns to place their symbol ans first one to get 3 in a line wins."}
        />
       <ProjectLayout
        imgUrl={ brain }
        title={"Brain Blitz"}
        link={"https://eshanpokhrel.github.io/MeomoryGame/"}
        desc={"It is a memory testing game where you have to match the pictures of two same fruits and do so to all of it to complete the game, and the time will be recorded and the best time will be saved as the highscore using the local storage. Its made with vanilla javascript and css and also has sound effects."}
        />
       <ProjectLayout
        imgUrl={ clock }
        title={"Clock"}
        link={"https://eshanpokhrel.github.io/clock/"}
        desc={"Analog and digital clock made in vanilla javascript with CSS. Used multiple date methods, and learned about the variable and calc methods in CSS and applied them in this project."}
        />
       <ProjectLayout
        imgUrl={ kanban }
        title={"Kanban"}
        link={"https://eshanpokhrel.github.io/kanban/"}
        desc={"A simple kanaban prototype where you can list your tasks track your progress, using the drag and drop feature, placing the task in one of the boards either its assigned or in-progress or completed."}
        />
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
