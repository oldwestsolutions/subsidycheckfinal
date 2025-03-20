"use client";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Programs() {
  const programs = [
    {
      title: "Food Assistance",
      description: "SNAP benefits to help with grocery expenses",
      benefits: ["Monthly benefits", "Nutrition education", "Local retailers"]
    },
    {
      title: "Education Grants",
      description: "Medical coverage for eligible individuals and families",
      benefits: ["Doctor visits", "Prescriptions", "Preventive care"]
    },
    {
      title: "Medical Benefits",
      description: "Medical coverage for eligible individuals and families",
      benefits: ["Scholarships and Grants", "Promotions", "Tax Refunds"]
    },
    {
      title: "Housing Grants",
      description: "Assistance with rent and utilities",
      benefits: ["Rent assistance", "Utility help", "Emergency housing"]
    }
  ];

  return (
    <section className="programs py-5">
      <Container>
        <h2 className="text-center mb-2">Available Programs</h2>
        <p className="text-center mb-5">Explore the various assistance programs available to eligible residents</p>
        
        <Row>
          {programs.map((program, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <Card className="h-100 program-card">
                <Card.Body>
                  <h3 className="h5 mb-3">{program.title}</h3>
                  <p className="text-muted mb-4">{program.description}</p>
                  <ul className="list-unstyled">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="mb-2">
                        <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .programs {
          background-color: white;
        }
        .program-card {
          border: 1px solid #e0e0e0;
          transition: transform 0.2s;
        }
        .program-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
      `}</style>
    </section>
  );
} 