// AboutPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import About from '../components/About.js';

const AboutPage = () => {
  return (
    <Container>
      <h1>About Page</h1>
      <Row>
        <Col>
          <About />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;