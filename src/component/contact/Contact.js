import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import './Contact.css'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xqad5rl', 'template_jb46glb', form.current, 'NS87pt9dTwlhsITwE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact-container'>
                <div className='contact-options'>
                    <article className='contact-option'>
                        <MdEmail className='contact-option-icon' />
                        <h4>Email</h4>
                        <h5>aryanrajj1234@gmail.com</h5>
                        <a href='mailto:aryanrajj1234@gmail.com' target='_blank'>Send a Message</a>
                    </article>

                    {/* for Messenger */}
                    <article className='contact-option'>
                        <BsMessenger className='contact-option-icon' />
                        <h4>Messenger</h4>
                        <h5>Deepak kumar</h5>
                        <a href='https://m.me/https://www.facebook.com/profile.php?id=100012985965690' target='_blank'>Send a Message</a>
                    </article>

                    {/* for watsapp */}
                    <article className='contact-option'>
                        <IoLogoWhatsapp className='contact-option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+91 6392862240</h5>
                        <a href='https://api.whatsapp.com/send?phone+91 6392862240' target='_blank'>Send a Message</a>
                    </article>




                </div>
                {/* start form contact options */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Enter Your Name' required />
                    <input type='email' name='email' placeholder='Enter your Email' required />
                    <textarea name='message' rows="7" placeholder='Enter Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>

            </div>
        </section>
    )
}

export default Contact
