  import React from 'react';
  import './Projects.css'; // Import the CSS file for styling

  function Projects() {
    return (
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-container">
        <a href="https://github.com/davidjoves/Collision-Sandbox" className="project-card" target="_blank" rel="noopener noreferrer">
          <div className="project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                <h3>2D Collision Sandbox</h3>
              </div>
              <div className="project-card-back">
                <p> Created GUI to simulate 2D Collisions with cutomizable attributes like mass, speed and direction.</p>
              </div>
            </div>
          </div>
        </a>
        
        <a href="https://github.com/davidjoves/my-portfolio" className="project-card" target="_blank" rel="noopener noreferrer">
          <div className="project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                <h3>Web-Portfolio</h3>
              </div>
              <div className="project-card-back">
                <p>The website you are currently navigating! Made using React</p>
              </div>
            </div>
          </div>
        </a>
        </div>
      </section>
    );
  }

  export default Projects;