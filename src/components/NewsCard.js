import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

import Loader from '../images/Loader.gif';
import NotFound from '../images/imgnotfound.jpg';

export default function NewsCard(props) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);
    const pageSize = 9; // You can adjust this

    const totalPages = Math.min(Math.ceil(totalResults / pageSize), 10); // cap at 10 pages

    // Fetch news data from an API or a static source
    useEffect(() => {
        const fetchNews = async () => {
            //setLoading(true);
            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/top-headlines',
                    {
                        params: {
                            country: 'us',
                            category: 'business',
                            //pageSize: 9,
                            pageSize,
                            page,
                            apiKey: '748d7d006c784454ba5da32b7430566a',
                        },
                    }
                );
                setArticles(response.data.articles);
                setTotalResults(response.data.totalResults);
                setError(null);
            } catch (err) {
                console.error('Error fetching news:', err);
                setError('Failed to load news articles.');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [page]); // Runs once on component mount

    // Function to truncate text with max length
    const truncate = (text, maxLength) => {
        if (!text) return 'No description available.';
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    // Render loading state or error message
    if (loading) return <p className="text-center mt-5"><img src={Loader} alt="Loading..." /></p>;
    if (error) return <p className="text-center mt-5">{error}</p>;

    //const totalPages = Math.ceil(totalResults / pageSize);

    return (
        <>
            {articles?.map((article, index) => ( //? used to for undedined articles
                <div className="col-md-3 mb-3" key={index}>
                    <div className="card">
                        {article.urlToImage && (
                            <img
                                src={article.urlToImage || NotFound}
                                alt={article.title || 'News Image'}
                                style={{ width: '100%', minHeight: '200px', objectFit: 'cover' }}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = NotFound;
                                }}
                            />
                        )}
                        <div className="card-body">
                            <h5 className="card-title">{truncate(article.title, 40)}</h5>
                            <p className="card-text">{truncate(article.description, 60)}</p>
                            <Link to={article.url} className="btn btn-primary btn-sm float-end" target="_blank" rel="noopener noreferrer">Details</Link>
                        </div>
                    </div>
                </div>
            ))}

            {/* Pagination Controls */}
            <div className="d-flex justify-content-center mt-4 flex-wrap gap-2">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                >
                    Previous
                </button>

                {[...Array(totalPages)].map((_, i) => {
                    const pageNum = i + 1;
                    return (
                        <button
                            key={pageNum}
                            className={`btn btn-sm ${pageNum === page ? "btn-primary" : "btn-outline-primary"}`}
                            onClick={() => setPage(pageNum)}
                        >
                            {pageNum}
                        </button>
                    );
                })}

                <button
                    className="btn btn-outline-secondary"
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </>
    )
}
