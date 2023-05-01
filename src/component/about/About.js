import React from 'react'
import './About.css'
import AboutImage from '../../assets/deep.jpeg'
import { FiAward } from 'react-icons/fi'
import { VscFolderActive } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className='container about-container'>
                <div className='about-me'>
                    <div className='about-image'>
                        <img src={AboutImage} alt='about-image' style={{ width: '220px', height: '300px' }} />
                    </div>

                </div>

                {/* about content */}

                <div className='about-content'>
                    <div className='about-cards'>
                        <article className='about-card'>
                            <FiAward className='about-icon' />
                            <h3>Experienced</h3>
                            <small>Fresher</small>
                        </article>




                        <article className='about-card'>
                            <VscFolderActive className='about-icon' />
                            <h3>Projects</h3>
                            <small>10+</small>
                        </article>



                    </div>
                    <p className='about-content'>About</p>
                    <a href='#contact' className='btn btn-primary'> let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About
