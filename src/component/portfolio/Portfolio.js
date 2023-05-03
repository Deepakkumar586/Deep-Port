import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/Redmi.jpg'
import IMG2 from '../../assets/Shoping.jpg'
import IMG3 from '../../assets/Redmi.jpg'
import IMG4 from '../../assets/Redmi.jpg'
import IMG5 from '../../assets/Redmi.jpg'

const Portfolio = () => {
    const data = [
        {
            id: 1,
            image: IMG1,
            title: 'MI CLone',
            github: 'https://github.com',

        },
        {
            id: 2,
            image: IMG2,
            title: 'Shoping Cart',
            github: 'https://github.com',
        },

        {
            id: 3,
            image: IMG3,
            title: 'Weather Application',
            github: 'https://github.com',

        },
        {
            id: 4,
            image: IMG4,
            title: 'Weather Application',
            github: 'https://github.com',
        },
        {
            id: 5,
            image: IMG5,
            title: 'Weather Application',
            github: 'https://github.com',
        }
    ]
    return (
        <section id='project'>
            <h3 style={{ textAlign: "center", marginBottom: '2rem' }}>My Projects</h3>

            <div className='container portfolio-container'>
                {
                    data.map(({ id, image, title, github }) => {
                        return (
                            <article key={id} className='portfolio-item'>
                                <div className='portfolio-item-img'>
                                    <img src={image} alt={title} width='200px' height="250px" />
                                </div>

                                <h3>{title}</h3>
                                <div className='portfolio-item-cta'>
                                    <a href={github} className='btn'>Github</a>

                                </div>

                            </article>
                        )

                    })
                }






            </div>

        </section>
    )
}

export default Portfolio
