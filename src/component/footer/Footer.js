import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer-logo'> Deepak Kumar</a>
            <ul className='permanentLinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#service'>Services</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>


            <div className='footer-socials'>
                <a href='https://facebook.com' target='_blank'><FaFacebook /></a>
                <a href='https://github.com' target='_blank'><FaGithub /></a>
                <a href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
            </div>

            <div className='footer-copyright'>
                <small>&copy; Deepak kumar.All rights reserved.</small>

            </div>


        </footer>
    )
}

export default Footer
