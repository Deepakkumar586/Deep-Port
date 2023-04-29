import React from 'react'
import CTA from './CTA'
import ME from '../../assets/Aryan.jpg'
import HeaderSocials from './HeaderSocials'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className='container header-container'>
                <h5>Hey, I'm</h5>
                <h1>Deepak Kumar</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />

                {/* HeaderSocial */}
                <HeaderSocials />

                <div className='me'>
                    <img src={ME} alt='me' />
                </div>

                <a href="#contact" className='scroll-down'>Scroll Down</a>

            </div>
        </header>
    )
}

export default Header
