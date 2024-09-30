import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    const navigate = useNavigate();
    const location = useLocation(); 

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePaginationClick = (number) => {
        paginate(number);
        
        if (location.pathname === '/') {
            navigate("/");
            setTimeout(() => {
                const section = document.getElementById('blog-section');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <nav>
            <ul className="pagination justify-content-end">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => handlePaginationClick(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;

