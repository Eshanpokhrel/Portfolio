"use client";
import Title from "@/components/Title";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";


const About = () => {

  const textRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    gsap.set([textRef.current, cubeRef.current], { visibility: "visible" });

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
        delay: 0.2,
      }
    );

    gsap.fromTo(
      cubeRef.current,
      {
        scale: 0.7,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power4.inOut",
        delay: 0,
      }
    )
  }, []);

  return (
    <div className="h-full relative p-2 sm:p-6 z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 sm:gap-36 h-fit lg:h-full w-full sm:w-11/12 mx-auto mt-4 sm:mt-0 sm:items-center">
        {/* Left Column - Text */}
        <div className="text-left sm:col-span-1 p-8 sm:p-10 h-fit mt-8 sm:mt-0">
          <Title text="About Me" />
          <div
            ref={textRef}
            className="invisible text-white font-black space-y-2 sm:space-y-4 mt-2 sm:mt-6 sm:pl-16 text-lg sm:text-3xl"
          >
            <p>
              I'm a very ambitious front-end enthusiast looking for a role in an
              IT company with the opportunity to work on challenging and diverse
              projects.
            </p>
            <p>
              With my skills in technologies like{" "}
              <i>
                <b style={{ color: "yellow" }}>
                  JS, CSS, React, Next.js, Tailwind, Git,
                </b>
              </i>{" "}
              I bring a dynamic edge to web development. Let's collaborate to
              build something extraordinary together.
            </p>
            <p>
              I'm quietly confident, naturally curious and prepetually working
              on improving my chops one design problem at a time.
            </p>
          </div>
        </div>
        <div className="col-span-1 h-fit">
          <div ref={cubeRef} className="invisible stage-cube-container">
            <div className="cube-spinner">
              <div className="cube-face face1">
                <Image
                  src="/images/tw.png"
                  alt="Tailwind CSS"
                  width={70}
                  height={70}
                  className="w-30 h-20 md:w-50 md:h-40"
                />
              </div>
              <div className="cube-face face2">
                <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
              </div>
              <div className="cube-face face3">
                <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
              </div>
              <div className="cube-face face4">
                <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
              </div>
              <div className="cube-face face5">
                <FontAwesomeIcon icon={faHtml5} color="#f06529" />
              </div>
              <div className="cube-face face6">
                <FontAwesomeIcon icon={faGitAlt} color="#ec4828" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
