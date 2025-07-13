import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard";

export default function News(props) {

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
											<NewsCard /> {/* NewsCard component fetches and displays news articles */}
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

