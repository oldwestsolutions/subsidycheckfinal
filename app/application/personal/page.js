"use client";
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function PersonalInformation() {
  return (
    <div className="application-page">
      <Container className="py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Link href="/application" className="back-link">
            <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
            Back to Welcome
          </Link>
          <div className="progress-text">Step 1 of 4</div>
        </div>

        <Card className="application-card">
          <Card.Body className="p-4">
            <h1 className="h3 mb-4">Personal Information</h1>
            
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Social Security Number</Form.Label>
                    <Form.Control type="password" placeholder="XXX-XX-XXXX" required />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" required />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Preferred Contact Method</Form.Label>
                    <Form.Select>
                      <option>Email</option>
                      <option>Phone</option>
                      <option>Text Message</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-flex justify-content-end mt-4">
                <Link href="/application/address">
                  <Button variant="success" size="lg">
                    Continue to Address
                  </Button>
                </Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>

      <style jsx global>{`
        .application-page {
          background-color: #f8f9fa;
          min-height: 100vh;
          padding-top: 76px;
        }
        .application-card {
          max-width: 800px;
          margin: 0 auto;
          border: none;
          border-radius: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .back-link {
          color: #198754;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .back-link:hover {
          color: #146c43;
        }
        .progress-text {
          color: #6c757d;
          font-weight: 500;
        }
        .form-label {
          font-weight: 500;
        }
        .form-control, .form-select {
          padding: 0.75rem;
          border-radius: 8px;
        }
        .form-control:focus, .form-select:focus {
          border-color: #198754;
          box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
        }
      `}</style>
    </div>
  );
} 