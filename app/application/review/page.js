"use client";
import { Container, Card, Button, Row, Col, Table } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function ReviewApplication() {
  // This would normally be populated from a form state management system
  const mockData = {
    personal: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "(555) 123-4567",
      dob: "1980-01-01",
    },
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      housing: "Rent"
    },
    income: {
      householdSize: "3",
      sources: [
        { source: "Employment", amount: "4000", frequency: "Monthly" },
        { source: "Social Security", amount: "1200", frequency: "Monthly" }
      ]
    }
  };

  return (
    <div className="application-page">
      <Container className="py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Link href="/application/income" className="back-link">
            <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
            Back to Income Information
          </Link>
          <div className="progress-text">Step 4 of 4</div>
        </div>

        <Card className="application-card">
          <Card.Body className="p-4">
            <h1 className="h3 mb-4">Review Your Application</h1>
            <p className="text-muted mb-4">Please review your information carefully before submitting.</p>

            <div className="review-section mb-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="h5 mb-0">Personal Information</h2>
                <Link href="/application/personal" className="edit-link">
                  <FontAwesomeIcon icon={faEdit} className="me-1" />
                  Edit
                </Link>
              </div>
              <Card className="bg-light">
                <Card.Body>
                  <Row>
                    <Col md={6}>
                      <p className="mb-1"><strong>Name:</strong> {mockData.personal.name}</p>
                      <p className="mb-1"><strong>Email:</strong> {mockData.personal.email}</p>
                    </Col>
                    <Col md={6}>
                      <p className="mb-1"><strong>Phone:</strong> {mockData.personal.phone}</p>
                      <p className="mb-1"><strong>Date of Birth:</strong> {mockData.personal.dob}</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>

            <div className="review-section mb-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="h5 mb-0">Address Information</h2>
                <Link href="/application/address" className="edit-link">
                  <FontAwesomeIcon icon={faEdit} className="me-1" />
                  Edit
                </Link>
              </div>
              <Card className="bg-light">
                <Card.Body>
                  <p className="mb-1"><strong>Street:</strong> {mockData.address.street}</p>
                  <p className="mb-1"><strong>City:</strong> {mockData.address.city}</p>
                  <p className="mb-1"><strong>State:</strong> {mockData.address.state}</p>
                  <p className="mb-1"><strong>ZIP Code:</strong> {mockData.address.zip}</p>
                  <p className="mb-1"><strong>Housing Status:</strong> {mockData.address.housing}</p>
                </Card.Body>
              </Card>
            </div>

            <div className="review-section mb-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="h5 mb-0">Income Information</h2>
                <Link href="/application/income" className="edit-link">
                  <FontAwesomeIcon icon={faEdit} className="me-1" />
                  Edit
                </Link>
              </div>
              <Card className="bg-light">
                <Card.Body>
                  <p className="mb-3"><strong>Household Size:</strong> {mockData.income.householdSize}</p>
                  <h3 className="h6 mb-2">Income Sources:</h3>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Source</th>
                        <th>Amount</th>
                        <th>Frequency</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockData.income.sources.map((source, index) => (
                        <tr key={index}>
                          <td>{source.source}</td>
                          <td>${source.amount}</td>
                          <td>{source.frequency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </div>

            <div className="certification-section mb-4">
              <Form.Check 
                type="checkbox"
                id="certify"
                label="I certify that all information provided is true and correct to the best of my knowledge."
                className="mb-3"
                required
              />
            </div>

            <div className="d-flex justify-content-between mt-4">
              <Link href="/application/income">
                <Button variant="outline-secondary" size="lg">
                  Previous
                </Button>
              </Link>
              <Button 
                variant="success" 
                size="lg"
                className="submit-button"
              >
                <FontAwesomeIcon icon={faCheck} className="me-2" />
                Submit Application
              </Button>
            </div>
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
        .edit-link {
          color: #198754;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }
        .edit-link:hover {
          color: #146c43;
        }
        .progress-text {
          color: #6c757d;
          font-weight: 500;
        }
        .review-section {
          margin-bottom: 2rem;
        }
        .submit-button {
          padding-left: 2rem;
          padding-right: 2rem;
        }
        .table {
          margin-bottom: 0;
        }
        .certification-section {
          background-color: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #dee2e6;
        }
      `}</style>
    </div>
  );
} 