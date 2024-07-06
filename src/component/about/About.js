import React from 'react'
import './About.css'
import AboutImage from '../../assets/deep.jpeg'
import { FiAward } from 'react-icons/fi'
import { VscFolderActive } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            {/* <h5>Get to know</h5> */}
            <h2>About Me</h2>



            {/* <div className='about-image'>
                        <img src={AboutImage} alt='about-image' style={{ width: '220px', height: '280px' }} />
                    </div> */}



            {/* about content */}

            <div className='about-content'>

                <p>Innovative Front End Developer  building and maintaining responsive websites in the recruiting industry. Proficient in HTML, CSS,JavaScript and React.Js,Tailwind,Bootstrap; plus modern libraries and frameworks. Passionate about usability and possess working knowledge of React Native</p>
                <a href='#contact' className='btn btn-primary' > let's Talk</a>
            </div>


        </section >
    )
}

export default About
