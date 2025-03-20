"use client";
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function MainNavbar() {
  return (
    <div className="navbar-wrapper">
      <Navbar className="navbar-custom" fixed="top">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <FontAwesomeIcon icon={faHome} className="text-success me-2" />
            <span className="brand-text">State Benefits Portal</span>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <style jsx>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1030;
        }
        .navbar-custom {
          background: rgba(52, 58, 64, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          width: 100%;
        }
        .brand-text {
          font-weight: 600;
          font-size: 1.2rem;
          color: white;
        }
      `}</style>
    </div>
  );
} 