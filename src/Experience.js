import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience">
      <h2> Relative Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Computer Science Major @ UC Irvine</h3>
            <p>August 2023 - Present</p>
            <ul>
              <li> Completing Bachelors in Computer Science </li>
              <div className="coursework-section">
                <p className="coursework-header">Relative Coursework:</p>
                <p className="coursework-content">
                  Design and Analysis of Algorithms, Data Structure Implementation and Analysis,
                  Python Programming and Libraries, Introduction to Software Engineering,
                  Human Computer Interaction
                </p>
              </div>
            </ul>
          </div>
        </div>


        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Volunteer Tutor @ San Diego Mesa College</h3>
            <p>May 2023 - July</p>
            <ul>
              <li>• Organized and led complimentary tutoring and study sessions on a weekly basis for fellow students in computer science, math, and physics courses</li>
              <li>• Hosted educational sessions on <span className="highlight">JUnit </span> testing and <span className="highlight"> Git</span> version control</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Officer @ San Diego </h3>
            <p>May 2023 - July</p>
            <ul>
              <li>Worked on the Space Development Agency team.</li>
              <li>Led development of a Python automation script...</li>
              {/* More list items */}
            </ul>
          </div>
        </div>


        {/* Additional timeline items... */}
      </div>
    </section>
  );
}

export default Experience;
