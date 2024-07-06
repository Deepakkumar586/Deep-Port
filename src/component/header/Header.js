
import React from 'react'
import CTA from './CTA'
import ME from '../../assets/deep.jpg'
import HeaderSocials from './HeaderSocials'
import './Header.css'





const Header = () => {
    return (
        <header>
            <div className='container header-container'>
                <h5 style={{ fontSize: '1.3rem' }}>Hey, I'm</h5>
                <h1 className='styling'>Deepak Kumar</h1>
                <h5 style={{ color: '#1e2749', fontStyle: 'inherit', fontSize: '1.3rem' }}>Fullstack Developer</h5>
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
