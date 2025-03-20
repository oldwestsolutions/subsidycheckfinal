"use client";
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function IncomeInformation() {
  const [incomeEntries, setIncomeEntries] = useState([{ source: '', amount: '', frequency: '' }]);

  const addIncomeEntry = () => {
    setIncomeEntries([...incomeEntries, { source: '', amount: '', frequency: '' }]);
  };

  const removeIncomeEntry = (index) => {
    const newEntries = incomeEntries.filter((_, i) => i !== index);
    setIncomeEntries(newEntries);
  };

  return (
    <div className="application-page">
      <Container className="py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Link href="/application/address" className="back-link">
            <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
            Back to Address Information
          </Link>
          <div className="progress-text">Step 3 of 4</div>
        </div>

        <Card className="application-card">
          <Card.Body className="p-4">
            <h1 className="h3 mb-4">Income Information</h1>
            
            <Form>
              <Row className="mb-4">
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Number of Household Members</Form.Label>
                    <Form.Control type="number" min="1" required />
                  </Form.Group>
                </Col>
              </Row>

              <div className="income-section mb-4">
                <h2 className="h5 mb-3">Income Sources</h2>
                {incomeEntries.map((entry, index) => (
                  <div key={index} className="income-entry mb-4 p-3 border rounded">
                    <Row>
                      <Col md={5}>
                        <Form.Group className="mb-3">
                          <Form.Label>Income Source</Form.Label>
                          <Form.Select required>
                            <option value="">Select Source</option>
                            <option>Employment</option>
                            <option>Self-Employment</option>
                            <option>Social Security</option>
                            <option>Pension</option>
                            <option>Unemployment</option>
                            <option>Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3">
                          <Form.Label>Amount</Form.Label>
                          <Form.Control type="number" min="0" step="0.01" required />
                        </Form.Group>
                      </Col>
                      <Col md={3}>
                        <Form.Group className="mb-3">
                          <Form.Label>Frequency</Form.Label>
                          <Form.Select required>
                            <option value="">Select</option>
                            <option>Weekly</option>
                            <option>Bi-weekly</option>
                            <option>Monthly</option>
                            <option>Annually</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      {index > 0 && (
                        <Col xs={12}>
                          <Button 
                            variant="outline-danger" 
                            size="sm"
                            onClick={() => removeIncomeEntry(index)}
                            className="mt-2"
                          >
                            <FontAwesomeIcon icon={faTrash} className="me-2" />
                            Remove Income Source
                          </Button>
                        </Col>
                      )}
                    </Row>
                  </div>
                ))}
                
                <Button 
                  variant="outline-success" 
                  onClick={addIncomeEntry}
                  className="mb-4"
                >
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  Add Another Income Source
                </Button>
              </div>

              <div className="d-flex justify-content-between mt-4">
                <Link href="/application/address">
                  <Button variant="outline-secondary" size="lg">
                    Previous
                  </Button>
                </Link>
                <Link href="/application/review">
                  <Button variant="success" size="lg">
                    Continue to Review
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
        .income-entry {
          background-color: #f8f9fa;
          transition: all 0.3s ease;
        }
        .income-entry:hover {
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
} 