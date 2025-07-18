import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <Header />

            <div className="table-section">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div style={{ height: '550px', background: 'Turquoise', marginBottom: '10px', textAlign: 'center' }}>
								<h2 style={{ lineHeight: '80px', color: 'black' }}>Page Not Found</h2>
                                <p style={{ color: 'black' }}>Sorry, the page you are looking for does not exist. <Link to="/" style={{ textDecoration: 'underline', color: 'red' }}>Go back to Home</Link></p>
							</div>
						</div>
					</div>
				</div>
			</div> {/* Banner Scrollar Ends Turquoise */}

            <Footer />
        </>
    );
}

export default NotFound;
