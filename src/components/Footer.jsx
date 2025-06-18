import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
  return (
    <div className='bg-dark p-5' style={{}}>
        <div className='d-flex justify-content-center align-items-center gap-md-5 gap-4'>
            <a href="mailto:olagunjuayodeleganiyu@gmail.com"><FontAwesomeIcon size='2x' color='white' icon={faEnvelope}/></a>
            <a href="https://github.com/HarlabE"><FontAwesomeIcon size='2x' color='white' icon={faGithub}/></a>
            <a href="https://web.facebook.com/SigmaTech.And.Gadgets"><FontAwesomeIcon size='2x' color='white' icon={faFacebook}/></a>
            <a href="https://www.linkedin.com/in/ganiyu-olagunju-537312245/"><FontAwesomeIcon size='2x' color='white' icon={faLinkedin}/></a>
            
        </div>
        <div className='text-light text-center my-5'> <p>&copy;2025 Olagunju Ayodele Ganiyu All rights reserved</p></div>
    </div>
  )
}
