import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience">
      <h2> Relevent Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Computer Science Major @ UC Irvine</h3>
            <p>August 2023 - Present</p>
            <ul>
              <li> Completing <span className="highlight">Bachelors in Computer Science </span></li>
              <div className="coursework-section">
                <p className="coursework-header">Relevent Coursework:</p>
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
            <p> August 2022 - May 2023</p>
            <ul>
              <li>• Organized and led complimentary tutoring and study sessions on a weekly basis for fellow students in computer science, math, and physics courses</li>
              <li>• Hosted educational sessions on <span className="highlight">JUnit </span> testing and <span className="highlight"> Git</span> version control</li>
            </ul>
          </div>
        </div>


        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Community College Student @ San Diego Mesa College</h3>
            <p>August 2021 - May 2023</p>
            <ul>
              <li>Obtained <span className="highlight">Assoicate's in Computer Science</span> and <span className="highlight">Assoicate's in Mathematics</span></li>
              <div className="coursework-section">
                <p className="coursework-header">Relevent Coursework:</p>
                <p className="coursework-content">
                  Python Programming, Java Programming, Intermediate Java Programming, C Programming, C++ Programming, Data Structures in C++, Computer Organization and Assembly Language, Discrete Math for Computer Science, 
                </p>
              </div>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Material Coordinator @ Illumina</h3>
            <p>August 2021 - Janurary 2022</p>
            <ul>
              <li>• Collaborated with project managers to oversee inventory levels, deliveries, and storage space in multiple laboratory units and warehouse.</li>
              <li>• Utilized <span className="highlight">PostgreSQL</span> for efficient inventory management and streamlined order processing</li>
              <li>• Employed <span className="highlight">Jira </span>and <span className="highlight">Kanban boards</span>  to ensure accurate product ordering, on-time delivery, and proper storage in alignment with project manager requirements</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
