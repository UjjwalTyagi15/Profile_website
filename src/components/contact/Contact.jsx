import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
// import emailjs from '@emailjs/browser';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iixl0j8', 'template_xlr29op', form.current, '9afOT0gNITAqqTvP1')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="Contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_icon' />
            <h4>
              Email
            </h4>
            <a href='mailto:ujjwaltyagi1512@gmail.com' target='_blank' rel="noreferrer" >
            <h5>
              ujjwaltyagi1512@gmail.com
            </h5>
            Send a message</a>
          </article>
          <article className="contact_option">
            <RiWhatsappFill className='contact_icon' />
            <h4>
              Whatsapp
            </h4>

            <a href='https://api.whatsapp.com/send?phone=919354051038' target='_blank' rel="noreferrer" >Send a message</a>
          </article>
        </div>
        <form action='' onSubmit={sendEmail}>
          <h3>Send a Message</h3>
          <input type='text' name='name' placeholder='your full name' required></input>
          <input type='email' name='email' placeholder='your Email' required></input>
          <textarea name='message' rows='7' placeholder='Your mesasge' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact