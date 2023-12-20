import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./Contact.css";

function Contact() {
  const [copySuccess, setCopySuccess] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText('djoves@uci.edu')
      .then(() => {
        setCopySuccess('Email address copied to clipboard!');
        setTimeout(() => setCopySuccess(''), 3000); // Remove the message after 3 seconds
      })
      .catch(err => {
        console.error('Failed to copy email: ', err);
        setCopySuccess('Failed to copy email.');
        setTimeout(() => setCopySuccess(''), 3000);
      });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href="https://github.com/davidjoves" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <button onClick={copyEmail} className="email-icon">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </button>
        <a href="https://www.linkedin.com/in/david-joves" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      {copySuccess && <p>{copySuccess}</p>}
    </section>
  );
}

export default Contact;
