import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/Redmi.jpg'
import IMG2 from '../../assets/Shoping.jpg'
import IMG3 from '../../assets/Fitness.jpg'
import IMG4 from '../../assets/Redmi.jpg'
import IMG5 from '../../assets/Redmi.jpg'
<script>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Satisfy&display=swap');
</script>

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
            github: 'https://github.com/Deepakkumar586/Shopping-cart-',
        },

        {
            id: 3,
            image: IMG3,
            title: 'Fitness-Club',
            github: 'https://github.com/Deepakkumar586/Fitness-club',

        },
        {
            id: 4,
            image: 'file:///C:/Users/Deepak%20kumar/Downloads/Weather.webp',
            title: 'Weather Application',
            github: 'https://github.com/Deepakkumar586/Weather-App',
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
            <span style={{ textAlign: "center", marginBottom: '2rem' }}>My Projects</span>

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
