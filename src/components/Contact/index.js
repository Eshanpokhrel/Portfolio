import Loader from 'react-loaders'
import './index.scss'

import React, { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        return () => setTimeout(() => {
          setLetterClass("text-animate-hover")
        },3000)
      },[])

      const showSwal = () => {
        Swal.fire({
            title: "<b>Eshan Pokhrel</b>,",
            footer: "<b>Gokarneshwor-1, Kathmandu, Nepal.</b>",
            showCloseButton: true,
            confirmButtonText: "Copy mail",
            html: `<h2 id="email">eshanpokhrel12@gmail.com</h2>`, // Added an ID to the email text
        }).then((result) => {
            if (result.isConfirmed) {
                const emailElement = document.getElementById("email");
                if (emailElement) {
                    const emailText = emailElement.innerText;

                    navigator.clipboard.writeText(emailText)
                        .then(() => {
                            Swal.fire("Copied!", "Mail", "success");
                        })
                        .catch((error) => {
                            console.error("Failed to copy text: ", error);
                            Swal.fire("Error", "Failed to copy email.", "error");
                        });
                } else {
                    Swal.fire("Error", "Email element not found.", "error");
                }
            }
        });};
    
    //   const showSwal = () => {
    //     Swal.fire({
    //       title: "<b>Eshan Pokhrel</b>,",
    //       footer: "<b>Gokarneshwor-1, Kathmandu, Nepal.</b>",
    //       showCloseButton: true,
    //       confirmButtonText: "Copy mail",
    //       html: "<h2>eshanpokhrel12@gmail.com</h2>",
    //     }).then((result) => {
    //         /* Read more about isConfirmed, isDenied below */
    //         if (result.isConfirmed) {
    //           Swal.fire("copied!", "", "success");
    //         }
    //       });
    //   }

      const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'service_6x3mjek',
                'template_4tshiwc',
                refForm.current, 
                'Qm7KppMo6yyn2RKS9'
            )
            .then(() => {
                alert('The email was sent successfully')
                // Swal.fire("Sent!", "", "success");
                window.location.reload(false)
            },
            () => {
                alert('Message not sent!!')
                // Swal.fire("Failed!", "", "error");
            })
      }

      const copyBtn = () => {
        navigator.clipboard.writeText('eshanpokhrel12@gmail.com')
         .then(() => {
                Swal.fire("Copied!", "Mail", "success");
            })
         .catch((error) => {
                console.error("Failed to copy text: ", error);
                Swal.fire("Error", "Failed to copy email.", "error");
            });
      }

  return (
    <>
        <div className='container contact-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15} letterClass={letterClass}/>
                </h1>
                <p>
                    I am interested for the opportunities - interns or large projects. However if you have any questions you can reach out to me through the provided form.
                    <h3>It works!!!</h3>
                </p>
            </div>
            <button className='info-button' onClick={showSwal}>My Info</button>
            <div className="info-map">
                Eshan Pokhrel,
                <br />
                Gokarneshwor-1, Kathmandu, Nepal.
                <br />
                <span>eshanpokhrel12@gmail.com</span>
                <FontAwesomeIcon 
                    icon={faCopy} 
                    color='whitesmoke' 
                    style={{
                        position:'absolute',
                        right:"45px",
                        bottom:"25px",
                        color:"rgba(240, 240, 240, 0.73)",
                        fontSize:"12px"
                    }} 
                    onClick={copyBtn}
                />
            </div>
            <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name='from_name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder="Subject" type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea name="message" placeholder='Message' required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="Send" />
                            </li>
                        </ul>
                    </form>
                </div>
        </div>
        <Loader type='ball-zig-zag-deflect'/>
    </>
  )
}

export default Contact
