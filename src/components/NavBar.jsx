import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleScrollToServices = () => {
        navigate("/");
        setTimeout(() => {
            const servicesSection = document.getElementById('services-section');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); 
    };

    const handleScrollToBlog = () => {
        navigate("/");
        setTimeout(() => {
            const blogSection = document.getElementById('blog-section');
            if (blogSection) {
                blogSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); 
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="/images/logo.png" alt="UrbanTread Logo" style={{ height: '100px' }} />
                    UrbanTread
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleScrollToServices}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleScrollToBlog}>Blogs</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
