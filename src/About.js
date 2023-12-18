import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './About.css';
import useScrollTrigger from './useScrollTrigger';



function About() {
  const skills = ["coding.", "solving problems.", "designing.", "learning new things.", "algorithms.", "research.","teaching."];
  const [skill, setSkill] = useState(''); // Skill currently being displayed
  const [subIndex, setSubIndex] = useState(0); // Position in the current skill
  const [index, setIndex] = useState(0); // Index of the current skill in the skills array
  const [reverse, setReverse] = useState(false); // Whether the animation is in reverse mode
  const typingSpeed = 100; // Time in milliseconds
  const erasingSpeed = 50; // Time in milliseconds
  const pauseTime = 1000;

  
  // Typing effect logic
  useEffect(() => {
    // Only run the effect if the typing or erasing effect should be happening
    if (!reverse && subIndex === skills[index].length) {
      // If we've reached the end of a skill, begin the erasing effect after some time
      setTimeout(() => setReverse(true), 2000); // Delay before starting erasing
    } else if (reverse && subIndex === 0) {
      // If we've erased the whole skill, move to the next one and start typing
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % skills.length);
        setReverse(false);
      }, 1500); // Delay before starting next skill
    } else {
      // Typing or erasing effect
      const timeout = setTimeout(() => {
        setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
      }, reverse ? 75 : 50); // Erasing speed and typing speed
  
      return () => clearTimeout(timeout);
    }
  }, [subIndex, index, reverse, skills]);


  // Update the skill string
  useEffect(() => {
    if (reverse) {
      setSkill(skills[index].substring(0, subIndex - 1));
    } else {
      setSkill(skills[index].substring(0, subIndex));
    }
  }, [subIndex, index, reverse, skills]);

  return (
    <section id="about">
      <div className="intro-text">
        <h2>Hi, I'm David, I like <span className="changing-text" style={{ width: `${subIndex / skills[index].length * 100}%` }}>{skill}</span></h2>
      </div>

      <div className="about-content">          
        <div className="text-section">
            <h2>About Me</h2>
            <p>Hi! my name is David and I have always had a keen interest for tech. My software development journey started off in community college. During my two years over there I have developed many programs and started to pave my way onto becoming a successful software developer.</p>
            <p>Currently, I have had the greatful oppurtunity of continuing my studies over at the University of Calfornia, Irvine under their B.S program in Computer Science. As I continue to further develop my skills through schooling, I am actively seeking for internship oppurtunities during the spring and summer of 2024. Feel free to reach out to me using the links to the right. Scroll down to also learn about my software development skills and journey.  </p>
          </div>
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
      </div>
    </section>
  );
}

export default About;
