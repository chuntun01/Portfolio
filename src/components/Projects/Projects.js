import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aiIam from "../../Assets/Projects/ai_iam.png";
import crmImg from "../../Assets/Projects/crm.png";
import askthemallImg from "../../Assets/Projects/askthemall.png";
import ecommerceImg from "../../Assets/Projects/ecommerce.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: "white"}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiIam}
              isBlog={false}
              title="AI IAM Assistant"
              description="Developed an access-controlled web portal with an AI layer using NestJS (backend) and Next.js (frontend). Features secure document search & AI-powered Q&A, JWT authentication, and a 3-tier Role-Based Access Control (RBAC) system. Integrated OpenAI API for contextual document-grounded responses using RAG (Retrieval-Augmented Generation) architecture."
              ghLink="https://github.com/chuntun01"
              demoLink="https://trtassistant.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crmImg}
              isBlog={false}
              title="CRM Platform for Business Clients"
              description="Self-designed and delivered a complete production-ready CRM web portal for business clients. Features customer data management, contract history tracking, interactive analytics/reporting, and multi-level RBAC. Built using Next.js, React, PostgreSQL, and Supabase, and deployed on Vercel."
              ghLink="https://github.com/chuntun01"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={askthemallImg}
              isBlog={false}
              title="AskThemAll AI Comparison"
              description="A capstone project multi-provider AI comparison platform. Integrates GPT, Claude, Gemini, and Llama APIs through the OpenRouter API. Built with asynchronous concurrent API calls, TypeScript type-safe formatting, and real-time response rendering."
              ghLink="https://github.com/chuntun01"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerceImg}
              isBlog={false}
              title="E-commerce Website"
              description="A fully featured personal/academic online store application showcasing product catalogs, search filters, interactive shopping carts, checkout validation flows, and responsive UI design."
              ghLink="https://github.com/chuntun01"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
