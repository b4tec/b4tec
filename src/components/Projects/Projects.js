import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="face-mask-detection"
              description="The scenario of COVID-19 demanded an efficient face mask detection application. The main goal of the project is to implement this system at entrances of colleges, airports, hospitals and offices where chances of spread of spread of COVID-19 through contagion are relatively higher. It is an object detection and classification problem with two different classes (Mask and Without Mask). A hybrid model using deep and classical machine learning for detecting for mask will be presented. A dataset is used to build this face mask detector using Python, OpenCV, AND TensorFlow and Keras. While entering the place everyone should scan their face and then enter ensuring they have mask with them. If anyone is found to be without a face mask, beep alert will be generated. Hence to ensure that people wear masks while coming to work we hope this module will help in detecting it."
              ghLink="https://github.com/SHIVADAMAIN"
              demoLink="https://facemask-detection.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SCRFIRE"
              description="We generate ASCII art animated fire in CLI using Python by using the pyfiglet library. This library provides a wide range of functions that can be used to create various types of ASCII art animations. The most popular of these is the fire animation, which can be created using the pyfiglet.fire() function. This function takes a string as an argument and returns an ASCII art animation of a fire. You can also customize the animation by specifying the size, color, and speed of the animation."
              ghLink="https://github.com/SHIVADAMAIN"
              demoLink="https://youtu.be/ksvd5UXghiE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor-io"
              description="Online code and markdown editor build with react.js Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/SHIVADAMAIN"
              demoLink="https://readme.so"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="GLOBAL-RADIO"
              description="Radio Garden is an interactive map of live radio stations across the globe. It allows users to explore different cultures and music from around the world. With Radio Garden, users can listen to radio stations from all over the world, discover new music, and learn about different cultures. It is available for free on the web, as well as on iOS and Android devices."
              demoLink="https://radio.garden"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title= "Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              demoLink="https://web.youchat.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="HACKER-TYPER"
              description="HackerTyper is an online project that allows users to create a realistic-looking hacking experience. It features a text-based interface with a variety of functions and commands, as well as a simulated terminal window. The project also includes a variety of tools and resources to help users create their own hacking experience. HackerTyper allows users to customize their experience by selecting from a range of themes, fonts, and colors. It also includes a variety of sound effects and music to further enhance the experience. HackerTyper is a great way to learn more about hacking and computer security, and it's a great way to have some fun."
              demoLink="https://hackertyper.net"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
