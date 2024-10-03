import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-white mt-5" style={{ padding: '1rem 0' }}>
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    <div className="col-md-5 col-lg-4 col-xl-4 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">UrbanTread</h5>
                        <p>Urban Treads merges contemporary style with sustainability in the heart of the city. 
                            Specializing in eco-friendly footwear and apparel, we cater to trendsetters who value 
                            both fashion and the planet. Each piece is designed for comfort, style, and environmental 
                            consciousness, ensuring that every step you take supports a more sustainable world.</p>
                    </div>


                    <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">links</h5>
                        <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>FaceBook</a></p>
                        <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Instagram</a></p>
                        <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>linkedin</a></p>
                        <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Help</a></p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                        <p><i className="fas fa-home mr-3"></i> No 125, Negombo, Sri-Lanka</p>
                        <p><i className="fas fa-envelope mr-3"></i> urbantread@gmail.com</p>
                        <p><i className="fas fa-phone mr-3"></i> + 94 111 222 333</p>
                        <p><i className="fas fa-print mr-3"></i> + 94 234 567 890</p>
                    </div>
                </div>

                <hr className="mb-4" />

                <div className="row align-items-center">
                    <div className="col-md-12 col-lg-12">
                        <p>© 2024 UrbanTread</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
