import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-icons">
            <a href="https://github.com/davidjoves" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="mailto:djoves@uci.edu">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/david-joves" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
    </section>
  );
}

export default Contact;
