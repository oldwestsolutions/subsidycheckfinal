"use client";
import { Container, Button } from 'react-bootstrap';

export default function Hero() {
  return (
    <div className="hero-section position-relative">
      <div className="hero-overlay">
        <Container>
          <div className="hero-content text-white py-5">
            <div className="content-background">
              <h1 className="display-2 fw-bold mb-4">Apply for Benefits Today</h1>
              <p className="lead mb-4">
                Get the support you need through our streamlined application process. 
                One application connects you to multiple assistance programs.
              </p>
              <Button 
                variant="warning" 
                size="lg" 
                className="px-4 py-2"
              >
                Start Application →
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <style jsx>{`
        .hero-section {
          background-image: url('/StateBenefitshero.png');
          background-size: cover;
          background-position: center;
          height: 80vh;
          min-height: 600px;
        }
        .hero-overlay {
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.6) 50%,
            rgba(0, 0, 0, 0.4) 100%
          );
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
        }
        .hero-content {
          max-width: 600px;
        }
        .content-background {
          background: rgba(0, 0, 0, 0.5);
          padding: 2rem;
          border-radius: 10px;
          backdrop-filter: blur(5px);
        }
      `}</style>
    </div>
  );
} 