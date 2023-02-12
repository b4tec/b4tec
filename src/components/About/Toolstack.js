import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiHeroku,
  SiVercel,
  SiDocker,
  SiMysql,
  SiCisco,
  SiKalilinux,
  SiTensorflow,
  SiRedhat,
  SiNginx,
  SiNgrok,
  SiGnubash,
  SiFfmpeg,
  SiBlender,
  SiPowershell,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCisco />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedhat />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNginx />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNgrok />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiFfmpeg />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowershell />
      </Col>
    </Row>
  );
}

export default Toolstack;
