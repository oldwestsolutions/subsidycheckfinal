"use client";
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function AddressInformation() {
  return (
    <div className="application-page">
      <Container className="py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Link href="/application/personal" className="back-link">
            <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
            Back to Personal Information
          </Link>
          <div className="progress-text">Step 2 of 4</div>
        </div>

        <Card className="application-card">
          <Card.Body className="p-4">
            <h1 className="h3 mb-4">Address Information</h1>
            
            <Form>
              <Row>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Apartment/Unit Number (if applicable)</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Form.Select required>
                      <option value="">Select State</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      {/* Add all states */}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>ZIP Code</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Form.Group className="mb-4">
                    <Form.Label>Housing Status</Form.Label>
                    <Form.Select required>
                      <option value="">Select Status</option>
                      <option>Own</option>
                      <option>Rent</option>
                      <option>Temporary Housing</option>
                      <option>Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-flex justify-content-between mt-4">
                <Link href="/application/personal">
                  <Button variant="outline-secondary" size="lg">
                    Previous
                  </Button>
                </Link>
                <Link href="/application/income">
                  <Button variant="success" size="lg">
                    Continue to Income
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