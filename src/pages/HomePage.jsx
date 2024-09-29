import React, { useState, useEffect } from 'react';



function HomePage() {
    const [blogs, setBlogs] = useState([]);
    

    useEffect(() => {
        fetch('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30')
            .then(response => response.json())
            .then(data => setBlogs(data.blogs))
            .catch(error => console.error('Error fetching blog posts:', error));
    }, []);

    return (
        <div>
            
            <div className="landing-image" style={{ height: '75vh', backgroundImage: 'url(/images/landing-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                
            </div>
            <div className="services-section container mt-5">
                <h2>Our Services</h2>
                <div className="row">
                    
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="/images/service1.jpg" alt="Service 1" />
                            <div className="card-body">
                                <h5 className="card-title">Service 1</h5>
                                <p className="card-text">Description of Service 1.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="/images/service2.jpg" alt="Service 2" />
                            <div className="card-body">
                                <h5 className="card-title">Service 2</h5>
                                <p className="card-text">Description of Service 2.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="/images/service3.jpg" alt="Service 3" />
                            <div className="card-body">
                                <h5 className="card-title">Service 3</h5>
                                <p className="card-text">Description of Service 3.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blogs-section container mt-5">
                <h2>Latest Blogs</h2>
                {blogs.length > 0 ? (
                    <div className="row fixed-height-cards">
                        {blogs.map(blog => (
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
                    </div>
                ) : (
                    <p>No blogs available at the moment.</p>
                )}
            </div>
            
        </div>
    );
}

export default HomePage;