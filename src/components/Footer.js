import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,  
} from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3> Developed and Deployed by Mr.Damain </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} under bugwriter</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SHIVADAMAIN"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/ShivaDamain"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/bugswriter_____"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
              <FaInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://facebook.com/bugswriter"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
