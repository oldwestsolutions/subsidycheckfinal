"use client";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="py-4">
          <Col md={4} className="d-flex align-items-center">
            <FontAwesomeIcon icon={faHome} className="text-success me-2" />
            <span>© 2025 State Benefits Portal</span>
          </Col>
          
          <Col md={4} className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faPhone} className="text-success me-2" />
            <span>1-800-678-0123</span>
          </Col>
          
          <Col md={4} className="d-flex align-items-center justify-content-md-end">
            <FontAwesomeIcon icon={faEnvelope} className="text-success me-2" />
            <span>support@subsidycheck.com</span>
          </Col>
        </Row>

        <hr className="my-2" />

        <Row className="py-3">
          <Col className="text-center text-md-end">
            <a href="#" className="text-muted me-3">Privacy</a>
            <a href="#" className="text-muted me-3">Terms</a>
            <a href="#" className="text-muted me-3">Accessibility</a>
            <a href="#" className="text-muted">Language</a>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .footer {
          background-color: #f8f9fa;
          border-top: 1px solid #e0e0e0;
        }
        a {
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
} 