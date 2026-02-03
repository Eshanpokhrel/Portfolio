"use client";
import Title from "@/components/Title";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";


const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const formContainerRef = useRef<HTMLDivElement>(null); // Parent ref for context
  const formRef = useRef<HTMLFormElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const nameEmailRef = useRef<HTMLDivElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const copyMail = () => {
    navigator.clipboard.writeText("eshanpokhrel12@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);

    emailjs
      .sendForm("service_8jzo69q", "template_6kgary2", formRef.current, {
        publicKey: "Qm7KppMo6yyn2RKS9",
      })
      .then(() => {
        formRef.current?.reset();
        setSent(true);

        setTimeout(() => {
          setSent(false);
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setSending(false);
      });
  };

  useEffect(() => {
    // gsap.context makes sure everything is scoped and cleaned up
    let ctx = gsap.context(() => {
      
      // Reveal the container immediately to start animations
      gsap.set([textRef.current, nameEmailRef.current, subjectRef.current, messageRef.current, buttonRef.current], { 
        visibility: "visible" 
      });

      // Left text
      gsap.fromTo(textRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "bounce.out", delay: 0.2 }
      );

      // Timeline for the form to ensure smooth sequencing
      const tl = gsap.timeline();

      tl.fromTo(nameEmailRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power4.out", }
      )
      .fromTo(subjectRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power4.out" },
         "0"
      )
      .fromTo(messageRef.current,
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power4.out" },
        "0"
      )
      .fromTo(buttonRef.current,
        { y: 90, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power4.out" },
        "0"
      );
    }, formContainerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div ref={formContainerRef} className="h-full relative p-2 sm:p-6 z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-12 h-fit sm:h-full w-full sm:w-11/12 mx-auto mt-2 sm:mt-0 sm:items-center">
        {/* Left Column */}
        <div className="text-left col-span-1 p-8 sm:p-10 h-fit mt-8 sm:mt-0">
          <Title text="Contact" />
          <div
            ref={textRef}
            className="text-white font-black space-y-2 sm:space-y-4 mt-2 sm:mt-6 sm:pl-16 text-lg sm:text-3xl invisible"
          >
            <p>
              You can reach out to me through the given form or you can email me
              at{" "}
              <span
                onClick={copyMail}
                className={`font-bold select-none transition cursor-copy ${
                  copied ? "text-green-400" : "hover:text-yellow-400 underline"
                }`}
              >
                {copied ? " Copied ✓ " : "eshanpokhrel12@gmail.com"}
              </span>
            </p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="col-span-1 flex justify-center h-fit w-full items-center">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-2 sm:gap-4 w-2/3"
          >
            <div
              ref={nameEmailRef}
              className="grid grid-cols-2 gap-2 sm:gap-4 invisible"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <input
              ref={subjectRef}
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="p-3 rounded bg-gray-800 text-white border border-gray-600 invisible focus:outline-none focus:border-yellow-400"
            />

            <textarea
              ref={messageRef}
              name="message"
              placeholder="Your Message"
              required
              className="p-3 rounded bg-gray-800 text-white border border-gray-600 invisible focus:outline-none focus:border-yellow-400 h-20 sm:h-32 resize-none"
            />

            <button
              ref={buttonRef}
              type="submit"
              disabled={sending || sent}
              className={`flex items-center justify-center gap-2 py-3 px-6 rounded font-bold transition-colors invisible
                ${
                  sent
                    ? "bg-green-500 text-black"
                    : "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                }
                ${sending ? "opacity-60 cursor-not-allowed" : ""}
              `}
            >
              {sending && "Sending..."}
              {sent && "Sent ✓"}
              {!sending && !sent && "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
