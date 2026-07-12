import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: "justify"}}>
            Hi everyone! I’m <span className="purple">Hồ Trung Tuấn</span> from{" "}
            <span className="purple">Hồ Chí Minh, Vietnam</span>.
            <br />
            I am a <span className="purple">Software Engineering</span> graduate from <span className="purple">Nguyen Tat Thanh University</span> (expecting degree in 09/2026).
            <br />
            I have worked as an Intern Software Engineer at <span className="purple">VNVC Vaccination Center</span> for 4 months, and as a freelance Fullstack Developer designing and delivering a complete <span className="purple">CRM Web Portal</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New AI Technologies & APIs 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Exploring New Places 🌍
            </li>
          </ul>

          <p style={{color: "rgb(155 126 172)"}}>
            "Taking ownership and building robust systems that solve real-world problems!"{" "}
          </p>
          <footer className="blockquote-footer">Trung Tuấn</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
