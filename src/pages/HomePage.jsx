import React, { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function HomePage() {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    useEffect(() => {
        fetch('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30')
            .then(response => response.json())
            .then(data => setBlogs(data.blogs))
            .catch(error => console.error('Error fetching blog posts:', error));
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        adaptiveHeight: true
    };
    
    return (
        <div>
            
            <div className="landing-slider">
                <Slider {...settings}>
                    <div>
                        <img src="/images/slider/slider1.png" alt="Slide 1"  />
                    </div>
                    <div>
                        <img src="/images/slider/slider2.png" alt="Slide 2"  />
                    </div>
                    <div>
                        <img src="/images/slider/slider3.png" alt="Slide 3"  />
                    </div>
                </Slider>
            </div>
            <div id="services-section" className="services-section container mt-5">
                <h2 className="section-header section-title">Our Services</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card service-card" style={{ height: '200px' }}>
                            <img src="/images/service/service3.jpg" alt="Shoe Recycling Program" />
                            <div className="card-body service-card-body">
                                <h5 className="card-title">Shoe Recycling Program</h5>
                                <p className="card-text">Bring in your old shoes for recycling and get a discount on your next purchase, fostering a sustainable cycle.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card service-card" style={{ height: '200px' }}>
                            <img src="/images/service/service2.jpg" alt="Eco-Friendly Repair Service" />
                            <div className="card-body service-card-body">
                                <h5 className="card-title">Eco-Friendly Repair Service</h5>
                                <p className="card-text">Extend the life of your footwear with our professional and sustainable repair services.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card service-card" style={{ height: '200px' }}>
                            <img src="/images/service/service1.jpg" alt="Exclusive Members-Only Releases" />
                            <div className="card-body service-card-body">
                                <h5 className="card-title">Exclusive Members-Only Releases</h5>
                                <p className="card-text">Gain exclusive access to limited edition products and member-only events.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="blog-section" className="blogs-section container mt-5">
                <h2 className="section-header section-title">Latest Products</h2>
                {currentPosts.length > 0 ? (
                    <div className="row fixed-height-cards">
                        {currentPosts.map(blog => (
                            <div key={blog.id} className="col-md-4 mb-4">
                                <div className="card card-shadow">
                                    <img className="card-img-top" src={blog.photo_url} alt={blog.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{blog.title}</h5>
                                        <p className="card-text">{blog.description}</p>
                                        <p><small className="text-muted">Posted on: {new Date(blog.created_at).toLocaleDateString()}</small></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <Pagination postsPerPage={postsPerPage} totalPosts={blogs.length} paginate={paginate} />
                    </div>
                ) : (
                    <p>No products available at the moment.</p>
                )}
            </div>
            
        </div>
    );
}

export default HomePage;