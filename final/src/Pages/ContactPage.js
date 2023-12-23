// ContactPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Contact from '../components/Contact.js';

const ContactPage = () => {
  return (
    <Container>
      <h1>Contact Page</h1>
      <Row>
        <Col>
          <Contact />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;