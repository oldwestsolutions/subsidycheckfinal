"use client";
import { Container, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHome } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="application-page">
      <Container className="py-5">
        <Card className="success-card">
          <Card.Body className="text-center p-5">
            <div className="success-icon mb-4">
              <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
            </div>
            <h1 className="mb-4">Application Submitted Successfully!</h1>
            <div className="success-message">
              <p className="lead mb-4">
                Thank you for choosing us. Your application has been received and is being processed.
              </p>
              <div className="info-box mb-4">
                <h2 className="h5 mb-3">What happens next?</h2>
                <p>An agent will be reaching out to you shortly via email and text message to:</p>
                <ul className="text-start">
                  <li>Be your dedicated point of contact</li>
                  <li>Guide you through the next steps</li>
                  <li>Answer any questions you may have</li>
                  <li>Help you complete the process</li>
                </ul>
              </div>
              <p className="reference-number mb-4">
                Application Reference: <strong>#APP-{Math.random().toString(36).substr(2, 9).toUpperCase()}</strong>
              </p>
            </div>
            <Link href="/">
              <Button 
                variant="outline-success" 
                size="lg"
                className="home-button"
              >
                <FontAwesomeIcon icon={faHome} className="me-2" />
                Return to Home
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>

      <style jsx global>{`
        .application-page {
          background-color: #f8f9fa;
          min-height: 100vh;
          padding-top: 76px;
        }
        .success-card {
          max-width: 800px;
          margin: 0 auto;
          border: none;
          border-radius: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .success-icon {
          font-size: 4rem;
          height: 120px;
          width: 120px;
          background: #e8f5e9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          animation: scaleIn 0.5s ease-out;
        }
        .success-message {
          animation: fadeIn 0.5s ease-out 0.3s both;
        }
        .info-box {
          background-color: #f8f9fa;
          border-radius: 10px;
          padding: 2rem;
          margin: 2rem 0;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        .info-box ul {
          list-style-type: none;
          padding-left: 0;
        }
        .info-box li {
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
        }
        .info-box li:before {
          content: "•";
          color: #198754;
          font-weight: bold;
          position: absolute;
          left: 0;
        }
        .reference-number {
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
          font-size: 1.1rem;
        }
        .home-button {
          padding: 1rem 2rem;
          transition: all 0.3s ease;
        }
        .home-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
} 