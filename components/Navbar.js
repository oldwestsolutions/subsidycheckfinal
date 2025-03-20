"use client";
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export default function MainNavbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // scroll down
        setShow(false);
      } else { // scroll up
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <Navbar expand="lg" className={`navbar-custom ${show ? 'show' : 'hide'}`} fixed="top">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <FontAwesomeIcon icon={faHome} className="text-success me-2" />
          <span className="brand-text">State Benefits Portal</span>
        </Navbar.Brand>
      </Container>

      <style jsx>{`
        .navbar-custom {
          background: rgba(52, 58, 64, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease-in-out;
        }
        .navbar-custom.hide {
          transform: translateY(-100%);
        }
        .navbar-custom.show {
          transform: translateY(0);
        }
        .brand-text {
          font-weight: 600;
          font-size: 1.2rem;
          color: white;
        }
      `}</style>
    </Navbar>
  );
} 