import React from "react";
import { Fragment } from "react";

const About = ({ bio, profession }) => {
  return (
    <div id="about" class="about">
      <div class="about-me container">
        <div class="section-title">
          <h2>About</h2>
          <p> about me</p>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right"></div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{profession}</h3>
            <p class="fst-italic">{bio}</p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>13 Sep 1992</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
                    <span>(+216) 27 404 884 </span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                    <span>Gafsa, Tunisia</span>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Age:</strong>{" "}
                    <span>30</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
                    <span>Engineering diplome</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <strong>PhEmailone:</strong>{" "}
                    <span>jadlafayrouz@yahoo.fr</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              I can solve complex problems while creating some of the most
              advanced applications in the industry. Communicates with other
              front-end developers within the company on best practices, new
              technologies. Excellent knowledge of JavaScript/TypeScript, HTML
              and CSS. Provides mentorship and supervise developers. Ensures the
              solution is scalable and meets overall business requirements.
              Guides technical teams to deliver flexible and scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
