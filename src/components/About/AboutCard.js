import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shiva, </span>
            from <span className="purple"> India .</span>
            <br />I am pursuing B.Tech in Computer science Engineering (CSE)
            from Scholars Institude of Technolagy and Management (SITM)
            under Assam Science and Technolagy University (ASTU)<br />
            Apart from coding, other activities that I love to do are !!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching meme
            </li>
            <li className="about-activity">
              <ImPointRight /> Podcast
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Terminal & Accesspoint is all i Need !!
              Thy crime is of curiosity: ) " {" "}
          </p>
          <footer className="blockquote-footer">Shiva</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
