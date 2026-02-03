"use client";
import Card from "@/components/Card";
import Title from "@/components/Title";
import gsap from "gsap";
import { useEffect, useRef } from "react";


const Projects = () => {
  // const handleNavigate = () => {
  //   window.location.href = "/collection";
  // };

    const textRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

      gsap.set([textRef.current, gridRef.current], { visibility: "visible" });

    gsap.fromTo(
      textRef.current,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "bounce.out",
        delay: 0.3,
      },
    );
    gsap.fromTo(
      gridRef.current,{
      y: 80,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power.inOut",
    }
    )
  }, []);

  return (
    <div className="h-full relative p-2 sm:p-6 z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-20 h-fit sm:h-full w-full sm:w-11/12 mx-auto mt-2 sm:mt-0 sm:items-center">
        {/* Left Column - Text */}
        <div className="text-left sm:col-span-1 p-8 sm:p-10 h-fit mt-8 sm:mt-0">
          <Title text="Projects" />
          <div ref={textRef} className="invisible text-white font-black space-y-2 sm:space-y-4 mt-2 sm:mt-6 sm:pl-16 text-lg sm:text-xl lg:text-3xl">
            <p>
              Welcome to the Project Section of my portfolio, a curated
              collection of endeavors showcasing my creativity, problem-solving
              prowess, and dedication to excellence. Each project reflects my
              commitment to innovation and my passion for bringing ideas to
              fruition. Join me on this journey of exploration and discovery as
              we delve into the world of possibilities together.
            </p>
          </div>
        </div>
        {/* Right Column - Projects Grid */}
        <div ref={gridRef} className="invisible col-span-1 mx-auto h-fit w-1/2 lg:w-full flex flex-col justify-between items-center gap-6">
          <div className="w-full h-fit grid grid-cols-2 gap-2 lg:gap-6 items-center">
            <a
              href="https://mystic-nepal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full w-full"
            >
              <Card
                imgUrl="/images/Mystic.png"
                title="Mystic Nepal Adventure"
                description="A real world project made for Mystic Nepal Adventures, showcasing Himalayan treks and cultural tours. The responsive platform features intuitive navigation and secure booking, boosting user engagement."
              />
            </a>
            <a
              href="https://movie-app-one-lilac.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full w-full"
            >
              <Card
                imgUrl="/images/movie.png"
                title="Movies"
                description="A web application where you can search movies, get details of the movies and get torrent links to download and direct links to download the movies."
              />
            </a>
            <a
              href="https://eshanpokhrel.com.np/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full w-full"
            >
              <Card
                imgUrl="/images/MBA.png"
                title="Market Basket Analysis"
                description="A web application where you can perform market basket analysis with the help of the FP Growth algorithm."
              />
            </a>
            <a
              href="https://epeak-beta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full w-full"
            >
              <Card
                imgUrl="/images/Epeak.png"
                title="Epeak Expedition"
                description="A real world project made for Epeak Expedition, showcasing Himalayan treks and cultural tours. The responsive platform features intuitive navigation and secure booking, boosting user engagement."
              />
            </a>
          </div>
          <a
            href="https://github.com/Eshanpokhrel?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className=" w-1/2 py-1 px-2 lg:py-4 border text-center text-lg lg:text-3xl border-yellow-400 text-yellow-400 font-bold rounded-md hover:bg-yellow-400 hover:text-black transition-all"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
