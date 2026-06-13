import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: "justify"}}>
            Hi everyone! I’m <span className="purple">Trung Tuấn</span> from{" "}
            <span className="purple">Gialai, Vietnam</span>.
            <br />
            I’m currently just <span className="purple">
              graduated
            </span> and{" "}
            <span className="purple">looking for opportunities</span>.
            <br />I have 4 months of experience work at{" "}
            <span className="purple">VNVC</span>
            <span className="purple"></span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> exploring new technology ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{color: "rgb(155 126 172)"}}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Trung Tuấn</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
