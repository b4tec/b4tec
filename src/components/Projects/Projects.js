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
              ghLink="https://github.com/SHIVADAMAIN/fmd-ai"
              demoLink="https://facemask-detection.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SCRFIRE"
              description="This program uses the curses library and the random library in Python to create a fire ASCII art. It runs on the command line and displays a graphical representation of fire. It uses random numbers to create shapes that resemble flames, with varying sizes and colors. The user can control the size and color of the fire with the curses library. It can be used in a variety of ways to create different sorts of effects like campfires in a camping game or to add a fiery touch to a text-based game. It can also be used as a decorative piece in an artistic project."
              ghLink="https://github.com/SHIVADAMAIN/SCRFIRE"
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
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in sucide prevention, N.L.P is a form of artificial intelligence that can understand the content of posts and user behaviour and analyse it to look for signs of suicide ideation. NLP can look at a range of messages, including social media posts and messaging apps,and detect the presence of suicide-related topics.Furthermore, the NLP can be used to detect the severity of suicide ideation and provide appropriate mental health support.This technology can be used to facilitate the identification of at-risk individuals and provide timely access to mental health support.In addition,NLP can be used to provide rapid responses to crises,to personalise interventions,and to track recovery progress.This technology can be offered to users as a tool to monitor suicidal ideations and as a resource to build self-awareness.Ultimately,the use of NLP for suicide prevention can be utilized to reduce the incidence of suicide,  promote mental health, and support individuals in times of distress."
              demoLink="https://kitt.plus"
              ghLink="https://github.com/SHIVADAMAIN/clint-xd"
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
