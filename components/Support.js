"use client";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Support() {
  const faqs = [
    {
      question: "What documents do I need to apply?",
      answer: "You'll need identification, proof of income, residence verification, and social security numbers for household members."
    },
    {
      question: "How long does the application process take?",
      answer: "Most applications are processed within 5-7 business days after all required documents are submitted."
    },
    {
      question: "When will I receive my benefits?",
      answer: "Once approved, benefits typically begin within 30 days of application approval."
    }
  ];

  return (
    <section className="support-section py-5">
      <Container>
        <Row>
          <Col lg={6} className="mb-4">
            <h2>Need Help?</h2>
            <p className="mb-4">
              Our dedicated support team is here to assist you through every
              step of the application process. Get help in multiple languages.
            </p>

            <div className="support-options">
              <div className="support-item mb-4">
                <FontAwesomeIcon icon={faPhone} className="text-success me-3" />
                <div>
                  <h3 className="h5">Phone Support</h3>
                  <p className="text-muted">Available Mon-Fri, 8am-6pm</p>
                </div>
              </div>

              <div className="support-item mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-success me-3" />
                <div>
                  <h3 className="h5">Email Support</h3>
                  <p className="text-muted">Get a response within 24 hours</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="faq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="mt-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="mb-3">
                    <strong>{faq.question}</strong>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .support-section {
          background-color: #f8f9fa;
        }
        .support-item {
          display: flex;
          align-items: flex-start;
          padding: 1rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .support-item:hover {
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
      `}</style>
    </section>
  );
} 