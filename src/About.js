import React, { useState, useEffect } from 'react';
import './About.css';



function About() {
  const skills = ["coding.", "solving problems.", "designing.", "learning new things.", "algorithms.", "research.","teaching."];
  const [skill, setSkill] = useState(''); // Skill currently being displayed
  const [subIndex, setSubIndex] = useState(0); // Position in the current skill
  const [index, setIndex] = useState(0); // Index of the current skill in the skills array
  const [reverse, setReverse] = useState(false); // Whether the animation is in reverse mode

  
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
        <h2>Hi I'm David, I like <span className="changing-text" style={{ width: `${subIndex / skills[index].length * 100}%` }}>{skill}</span></h2>
      </div>

      <div className="about-content">          
        <div className="text-section">
            <h2>About Me</h2>
            <p>
              Hello! My name is David, and I have always been deeply interested in technology. My software development journey began in community college. During my two years there, I developed numerous programs and began to carve a path toward becoming a successful software developer.
            </p>
            <p>
              Currently, I have had the wonderful opportunity to continue my studies at the University of California, Irvine, pursuing a B.S. in Computer Science. As I further develop my skills through academic training, I am actively seeking internship opportunities for the spring and summer of 2024. Please scroll down to learn more about my software development skills and journey.            
            </p>
          </div>
      </div>
    </section>
  );
}

export default About;
