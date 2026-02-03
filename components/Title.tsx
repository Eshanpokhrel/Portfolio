"use client";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";

interface TitleProps {
  text: string;
  text1?: string;
  text2?: string;
}

const Title: React.FC<TitleProps> = ({ text, text1, text2 }) => {
  const line1Ref = useRef<HTMLParagraphElement>(null);
  const line2Ref = useRef<HTMLParagraphElement>(null);
  const line3Ref = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = [line1Ref.current, line2Ref.current, line3Ref.current];

    const splits = lines.map((line) => new SplitType(line!, { types: "chars" }));

    gsap.set(containerRef.current, { visibility: "visible" });

    splits.forEach((split, index) => {
      gsap.fromTo(
        split.chars,
        { opacity: 0 },
        {
          opacity: 1,
          // y: 0,
          stagger: 0.05,
          delay: index * 0.2, // line-by-line delay
          duration: 1.5,
          ease: "power2.out",
        }
      );
    }); 

    return () => {
      splits.forEach((split) => split.revert());
    };
  }, []);

  return (
    <>
    <div className="font-family-la-belle">
      &lt;h1&gt;
    </div>
    <div ref={containerRef} className="invisible pl-4 sm:pl-16 text-5xl md:text-8xl font-bold leading-tight tracking-wide text-white">
      <p ref={line1Ref} className="text-yellow-400">{text}</p>
      {text1 && <p ref={line2Ref} className="">{text1}</p>}
      {text2 && <p ref={line3Ref} className="">{text2}</p>}
    </div>
    <div className="font-family-la-belle">
      &lt;/h1&gt;
    </div>
    </>
  );
};

export default Title;
