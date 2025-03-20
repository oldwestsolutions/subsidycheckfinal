"use client";
import { Container, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero-section position-relative">
      <div className="hero-overlay">
        <Container>
          <div className="hero-content text-white py-5">
            <div className="content-background">
              <h1 className="display-4 fw-bold mb-4">
                Streamlined Benefits Access
              </h1>
              <p className="lead mb-4 fw-normal">
                Access multiple assistance programs through our simplified application process. 
                Get the support you need with just one application.
              </p>
              <Link href="/application">
                <Button 
                  variant="success" 
                  size="lg" 
                  className="custom-button"
                >
                  Begin Your Application
                </Button>
              </Link>
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
            rgba(0, 0, 0, 0.85) 0%,
            rgba(0, 0, 0, 0.75) 50%,
            rgba(0, 0, 0, 0.65) 100%
          );
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
        }
        .hero-content {
          max-width: 650px;
        }
        .content-background {
          background: rgba(0, 0, 0, 0.6);
          padding: 2.5rem;
          border-radius: 12px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        :global(.custom-button) {
          background-color: #198754;
          border: none;
          padding: 0.8rem 2rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        :global(.custom-button:hover) {
          background-color: #146c43;
          transform: translateY(-2px);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
        }
        :global(.lead) {
          font-size: 1.25rem;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
} 