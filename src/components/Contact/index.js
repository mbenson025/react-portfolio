import './index.scss';
import Loader from 'react-loaders';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { useEffect, useState } from 'react';

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_yrakz9r',
        'template_c69lwtw',
        refForm.current,
        'n9TGLbDJevl2Z9xhF'
      )
      .then(
        () => {
          alert('Message sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send message');
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me</h1>
          <p>Send me a message:</p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input className="flat-button" type="submit" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  );
};

export default Contact;
