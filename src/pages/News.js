import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import NewsCard from "../components/NewsCard";

export default function News(props) {

	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Fetch news data from an API or a static source
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await axios.get(
					'https://newsapi.org/v2/top-headlines',
					{
						params: {
							country: 'us',
							category: 'business',
							pageSize: 9,
							apiKey: '748d7d006c784454ba5da32b7430566a',
						},
					}
				);
				setArticles(response.data.articles);
			} catch (err) {
				console.error('Error fetching news:', err);
				setError('Failed to load news articles.');
			} finally {
				setLoading(false);
			}
		};

		fetchNews();
	}, []); // Runs once on component mount

	// Function to truncate text with max length
	const truncate = (text, maxLength) => {
		if (!text) return 'No description available.';
		return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
	};

	// Render loading state or error message
	if (loading) return <p className="text-center mt-5">Loading...</p>;
	if (error) return <p className="text-center mt-5">{error}</p>;

	return (
		<>
			<Header />

			<div className="table-section">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div style={{ minHeight: '400px', background: 'Turquoise', marginBottom: '10px', padding: '10px' }}>
								<div className="row">
									<div className="col-md-12 mb-4">
										<h3 className="text-center">{props.title}</h3>
									</div>
									<div className="col-md-12">
										<div className="row">
											{/* <NewsCard title="News title" desc="News short description" imgurl="https://image.cnbcfm.com/api/v1/image/108166295-1751374764165-gettyimages-2222293408-AA_01072025_2311369.jpeg?v=1751374823&w=1920&h=1080" url="/news-details" /> */}

											{articles?.map((article, index) => ( //? used to for undedined articles
												<div className="col-md-3 mb-3" key={index}>
													<div className="card">
														{article.urlToImage && (
															<img src={article.urlToImage} alt={article.title} style={{ width: '100%', minHeight: '200px', overflow: 'hidden' }} />
														)}
														<div className="card-body">
															<h5 className="card-title">{truncate(article.title, 40)}</h5>
															<p className="card-text">{truncate(article.description, 60)}</p>
															<Link to={article.url} className="btn btn-primary btn-sm float-end" target="_blank" rel="noopener noreferrer">Details</Link>
														</div>
													</div>
												</div>
											))}

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> {/* Banner Scrollar Ends Turquoise */}

			<Footer />
		</>
	);
}

