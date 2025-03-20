"use client";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faCheckCircle, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function HowItWorks() {
  const steps = [
    {
      icon: faFileAlt,
      title: "1. Complete Application",
      description: "Fill out one simple application to apply for multiple programs"
    },
    {
      icon: faCheckCircle,
      title: "2. Verify Information",
      description: "Submit required documents to verify your eligibility"
    },
    {
      icon: faClock,
      title: "3. Quick Review",
      description: "Applications are typically reviewed within 5-7 business days"
    },
    {
      icon: faEnvelope,
      title: "4. Get Notified",
      description: "Receive updates about your application status via email or text"
    }
  ];

  return (
    <section className="how-it-works py-5">
      <Container>
        <h2 className="text-center mb-4">How It Works</h2>
        <p className="text-center mb-5">Our streamlined process makes it easy to apply for the assistance you need</p>
        
        <Row>
          {steps.map((step, index) => (
            <Col md={3} key={index} className="mb-4">
              <div className="step-card text-center p-4">
                <div className="icon-wrapper mb-3">
                  <FontAwesomeIcon icon={step.icon} className="text-success" size="2x" />
                </div>
                <h3 className="h5 mb-3">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .how-it-works {
          background-color: #f8f9fa;
        }
        .step-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          height: 100%;
          transition: transform 0.2s;
        }
        .step-card:hover {
          transform: translateY(-5px);
        }
        .icon-wrapper {
          background: #e8f5e9;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
} 