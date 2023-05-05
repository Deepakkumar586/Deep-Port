import React from 'react'
import './Experience.css'
import { AiFillCheckSquare } from 'react-icons/ai'

const Experience = () => {
    return (
        <section id='experience'>

            <h2>My Experience</h2>

            <div className='container experience_container'>
                {/* for fronted */}
                <div className='Experience-Fronted'>
                    <h3>Fronted Development</h3>
                    <div className='skill-content'>
                        <article className='details-skill'>
                            <AiFillCheckSquare className='experience-icon' />

                            <h4 >HTML</h4>

                        </article>
                        <article className='details-skill'>
                            <AiFillCheckSquare className='experience-icon' />
                            <h4>CSS</h4>


                        </article>
                        <article className='details-skill'>
                            <AiFillCheckSquare className='experience-icon' />
                            <h4>JAVASCRIPT</h4>


                        </article>
                        <article className='details-skill'>
                            <AiFillCheckSquare className='experience-icon' />
                            <h4>BOOTSTRAP</h4>


                        </article>
                        <article className='details-skill'>
                            <AiFillCheckSquare className='experience-icon' />
                            <h4>TAILWIND</h4>


                        </article>
                        <article className='details-skill'>
                            <AiFillCheckSquare className='experience-icon' />
                            <h4>REACT.JS</h4>


                        </article>
                    </div>

                </div>
                {/* for backend */}
                <div className='Experience-Backend'>
                    <h3>Backend Development</h3>
                    <div className='skill-content'>
                        <article className='details-skill'>
                            <AiFillCheckSquare className='experience-icon' />
                            <h4>Nodejs</h4>


                        </article>
                        <article className='details-skill'>
                            <AiFillCheckSquare className='experience-icon' />
                            <h4>MongoDb</h4>


                        </article>
                        <article className='details-skill'>
                            <AiFillCheckSquare className='experience-icon' />
                            <h4>Php</h4>


                        </article>
                        <article className='details-skill'>
                            <AiFillCheckSquare className='experience-icon' />
                            <h4>MySql</h4>


                        </article>
                        <article className='details-skill'>
                            <AiFillCheckSquare className='experience-icon' />
                            <h4>Python</h4>


                        </article>
                        <article className='details-skill'>
                            <AiFillCheckSquare className='experience-icon' />
                            <h4>Express</h4>


                        </article>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experience
