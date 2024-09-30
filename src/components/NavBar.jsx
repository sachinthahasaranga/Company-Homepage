import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
    const navigate = useNavigate();

    const handleScrollTo = (sectionId) => {
        navigate("/");
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="/images/logo.png"
                        alt="UrbanTread Logo"
                        style={{ height: '100px' }}
                    />
                    UrbanTread
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="nav-right-align">
                    <Nav className="ml-auto">  {/* Adjust this if needed or keep it as is */}
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link onClick={() => handleScrollTo('services-section')}>Services</Nav.Link>
                        <Nav.Link onClick={() => handleScrollTo('blog-section')}>Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
