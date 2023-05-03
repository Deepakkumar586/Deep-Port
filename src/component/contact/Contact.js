import React from 'react'
import './Contact.css'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact-component'>
                <div className='contact-options'>
                    <article className='contact-option'>
                        <MdEmail />
                        <h4>Email</h4>
                        <h5>aryanrajj1234@gmail.com</h5>
                        <a href='mailto:aryanrajj1234@gmail.com' target='_blank'>Send a Message</a>
                    </article>

                    {/* for Messenger */}
                    <article className='contact-option'>
                        <BsMessenger />
                        <h4>Messenger</h4>
                        <h5>Deepak kumar</h5>
                        <a href='https://m.me/https://www.facebook.com/profile.php?id=100012985965690' target='_blank'>Send a Message</a>
                    </article>

                    {/* for watsapp */}
                    <article className='contact-option'>
                        <IoLogoWhatsapp />
                        <h4>Watsapp</h4>
                        <h5>+916392862240</h5>
                        <a href='http://api.watsapp.com/send?phone+916392862240' target='_blank'>Send a Message</a>
                    </article>




                </div>
                {/* start form contact options */}
                <form action=''></form>

            </div>
        </section>
    )
}

export default Contact
