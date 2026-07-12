import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{fontSize: "2.6em"}}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate Software Developer who loves transforming ideas into reliable, scalable applications. With around <b>1 year of hands-on experience</b> (including a Software Engineering internship at VNVC and freelance work), I specialize in building efficient backend systems and intuitive user interfaces.
              <br />
              <br />
              I am highly proficient in the <b>TypeScript ecosystem</b>:
              <i>
                <b className="purple"> TypeScript, Node.js, NestJS, React, Next.js, and Databases like PostgreSQL/MongoDB. </b>
              </i>
              <br />
              <br />
              My key focus areas are developing secure 
              <i>
                <b className="purple"> Web Applications, Access-Controlled Portals (IAM/RBAC), </b>
              </i> and integrating advanced
              <i>
                <b className="purple"> AI solutions (RAG architecture, OpenAI/OpenRouter APIs) </b>
              </i> to solve real-world problems.
              <br />
              <br />
              Whenever possible, I apply clean code practices, Git workflow with merge requests/code reviews, and active ownership to deliver full production-ready products.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
