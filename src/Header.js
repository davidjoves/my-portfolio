import React from 'react';

function Header() {

  const scrollToSection = (event) => {
    event.preventDefault(); // Prevent the default anchor link behavior
    const section = event.target.getAttribute('href').slice(1); // Get the section id from href
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header>
      <nav>
        <a href="#about" onClick={scrollToSection}>About</a>
        <a href="#experience" onClick={scrollToSection}>Experience</a>
        <a href="#projects" onClick={scrollToSection}>Projects</a>
        <a href="#contact" onClick={scrollToSection}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
