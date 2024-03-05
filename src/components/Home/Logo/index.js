import './index.scss'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .from(bgRef.current, {
        opacity: 1,
      })
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
    <svg 
      width="24px" 
      height="24px" 
      viewBox="0 0 24 24" 
      role="img" 
      xmlns="http://www.w3.org/2000/svg">
        <path 
          fill='gold'
          
          ref={outlineLogoRef}
          d="M13.138.053a12.018 12.018 0 0 0-9.646 3.481A12.014 12.014 0 0 0 .937 16.651a12.014 12.014 0 0 0 11.162 7.348 2.275 2.275 0 1 0-.037-4.549 7.438 7.438 0 0 1-6.932-4.562 7.438 7.438 0 0 1 1.587-8.145 7.437 7.437 0 0 1 12.378 3.014H12.05a2.275 2.275 0 1 0 0 4.55h9.674A2.275 2.275 0 0 0 24 12.04 12.014 12.014 0 0 0 16.597.914a11.962 11.962 0 0 0-3.459-.86z"
        />
    </svg>
    </div>
  )
}


export default Logo
