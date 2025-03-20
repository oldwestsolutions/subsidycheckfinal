"use client";
import { Container, Card, Button, Form, Tab, Tabs, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLock, faUser, faEnvelope, faPhone, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function ApplicationPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  });
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Accept any credentials for testing
    setIsAuthenticated(true);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Accept any credentials for testing
    setIsAuthenticated(true);
  };

  // Add a demo login button
  const handleDemoLogin = () => {
    setIsAuthenticated(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  if (!isAuthenticated) {
    return (
      <div className="application-page">
        <Container className="py-5">
          <Card className="auth-card">
            <Card.Body className="p-4">
              <Tabs
                defaultActiveKey="login"
                className="mb-4 justify-content-center"
              >
                <Tab eventKey="login" title="Login">
                  <Form onSubmit={handleLogin} className="auth-form">
                    <div className="text-center mb-4">
                      <h2>Welcome Back</h2>
                      <p className="text-muted">Please login to continue your application</p>
                    </div>

                    <div className="mb-4 login-method-selector">
                      <Button
                        variant="link"
                        className={`method-button ${loginMethod === 'email' ? 'active' : ''}`}
                        onClick={() => setLoginMethod('email')}
                        type="button"
                      >
                        <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                        Email
                      </Button>
                      <div className="separator">|</div>
                      <Button
                        variant="link"
                        className={`method-button ${loginMethod === 'phone' ? 'active' : ''}`}
                        onClick={() => setLoginMethod('phone')}
                        type="button"
                      >
                        <FontAwesomeIcon icon={faPhone} className="me-2" />
                        Phone
                      </Button>
                    </div>

                    {loginMethod === 'email' ? (
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    ) : (
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    )}

                    <Form.Group className="mb-4">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>

                    <Button 
                      variant="success" 
                      size="lg" 
                      type="submit"
                      className="w-100 mb-3"
                    >
                      Login
                    </Button>

                    <div className="text-center">
                      <a href="#" className="text-muted">Forgot Password?</a>
                    </div>
                  </Form>
                </Tab>

                <Tab eventKey="signup" title="Sign Up">
                  <Form onSubmit={handleSignup} className="auth-form">
                    <div className="text-center mb-4">
                      <h2>Create Account</h2>
                      <p className="text-muted">Sign up to start your benefits application</p>
                    </div>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>

                    {error && (
                      <div className="alert alert-danger mb-3">
                        {error}
                      </div>
                    )}

                    <Button 
                      variant="success" 
                      size="lg" 
                      type="submit"
                      className="w-100"
                    >
                      Create Account
                    </Button>
                  </Form>
                </Tab>
              </Tabs>
              
              {/* Add demo button below the tabs */}
              <div className="text-center mt-4 pt-3 border-top">
                <p className="text-muted mb-2">Want to explore the application?</p>
                <Button 
                  variant="outline-success"
                  onClick={handleDemoLogin}
                  className="demo-button"
                >
                  Try Demo Version
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Container>

        <footer className="application-footer">
          <Container>
            <div className="footer-content">
              <div className="security-info">
                <FontAwesomeIcon icon={faShieldAlt} className="me-2 text-success" />
                <span>Secure Government Portal</span>
                <span className="separator mx-3">|</span>
                <FontAwesomeIcon icon={faLock} className="me-2 text-success" />
                <span>256-bit SSL Encryption</span>
              </div>
              <div className="footer-links">
                <a href="#" className="footer-link">Privacy Policy</a>
                <span className="separator mx-3">|</span>
                <a href="#" className="footer-link">Terms of Service</a>
                <span className="separator mx-3">|</span>
                <a href="#" className="footer-link">Help Center</a>
              </div>
            </div>
          </Container>
        </footer>

        <style jsx global>{`
          .application-page {
            background-color: #f8f9fa;
            min-height: 100vh;
            padding-top: 76px;
            padding-bottom: 80px;
          }
          .auth-card {
            max-width: 600px;
            margin: 0 auto;
            border: none;
            border-radius: 15px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .auth-form {
            max-width: 400px;
            margin: 0 auto;
            padding: 1rem;
          }
          .nav-tabs {
            border: none;
            margin-bottom: 2rem;
          }
          .nav-tabs .nav-link {
            border: none;
            padding: 1rem 2rem;
            font-weight: 500;
            color: #6c757d;
          }
          .nav-tabs .nav-link.active {
            color: #198754;
            background: none;
            border-bottom: 2px solid #198754;
          }
          .form-control {
            padding: 0.75rem;
            border-radius: 8px;
          }
          .form-control:focus {
            border-color: #198754;
            box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
          }
          .login-method-selector {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
          }
          .method-button {
            color: #6c757d;
            text-decoration: none;
            padding: 0.5rem 1rem;
            transition: all 0.3s ease;
            border: none;
          }
          .method-button:hover {
            color: #198754;
          }
          .method-button.active {
            color: #198754;
            font-weight: 500;
          }
          .separator {
            color: #dee2e6;
            font-weight: 200;
          }
          .application-footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            padding: 1rem 0;
            font-size: 0.875rem;
          }

          .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
          }

          .security-info {
            color: #6c757d;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .footer-links {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .footer-link {
            color: #6c757d;
            text-decoration: none;
            transition: color 0.2s ease;
          }

          .footer-link:hover {
            color: #198754;
          }

          @media (max-width: 768px) {
            .footer-content {
              flex-direction: column;
              text-align: center;
            }

            .security-info, .footer-links {
              justify-content: center;
            }
          }

          .demo-button {
            padding: 0.5rem 1.5rem;
            font-size: 0.9rem;
          }

          .border-top {
            border-color: rgba(0, 0, 0, 0.1) !important;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="application-page">
      <Container className="py-5">
        <Card className="welcome-card">
          <Card.Body className="text-center p-5">
            <div className="welcome-icon mb-4">
              <FontAwesomeIcon icon={faUser} className="text-success" />
            </div>
            <h1 className="mb-4">Welcome to Your Benefits Application</h1>
            <p className="lead mb-4">
              We're here to help you access the benefits you need. This application will take approximately 15-20 minutes to complete.
            </p>
            
            <div className="info-box mb-4">
              <h2 className="h5 mb-3">Before you begin, please have ready:</h2>
              <ul className="text-start">
                <li>Social Security Numbers (if applicable)</li>
                <li>Income information for all household members</li>
                <li>Current address and contact information</li>
                <li>Information about your housing expenses</li>
              </ul>
            </div>

            <Link href="/application/personal">
              <Button 
                variant="success" 
                size="lg" 
                className="start-button"
              >
                Start Application
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>

      <footer className="application-footer">
        <Container>
          <div className="footer-content">
            <div className="security-info">
              <FontAwesomeIcon icon={faShieldAlt} className="me-2 text-success" />
              <span>Secure Government Portal</span>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <span className="separator mx-3">|</span>
              <a href="#" className="footer-link">Help Center</a>
            </div>
          </div>
        </Container>
      </footer>

      <style jsx global>{`
        .application-page {
          background-color: #f8f9fa;
          min-height: 100vh;
          padding-top: 76px;
          padding-bottom: 80px;
        }
        .welcome-card {
          max-width: 800px;
          margin: 0 auto;
          border: none;
          border-radius: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .welcome-icon {
          font-size: 3rem;
          height: 100px;
          width: 100px;
          background: #e8f5e9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
        .info-box {
          background-color: #f8f9fa;
          border-radius: 10px;
          padding: 2rem;
          margin: 2rem 0;
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
        .start-button {
          padding: 1rem 3rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }
        .start-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .application-footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          padding: 1rem 0;
          font-size: 0.875rem;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-link {
          color: #6c757d;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #198754;
        }
        .separator {
          color: #dee2e6;
        }
      `}</style>
    </div>
  );
} 