import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Header />

			<div className="banner-section">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div style={{ height: '350px', background: 'coral' }}></div>
						</div>
						<div className="col-md-6">
							<div className="row">
								<div className="col-md-12">
									<div style={{ height: '110px', background: 'coral', marginBottom: '10px' }}></div>
								</div>
								<div className="col-md-12">
									<div style={{ height: '110px', background: 'coral', marginBottom: '10px' }}></div>
								</div>
								<div className="col-md-12">
									<div style={{ height: '110px', background: 'coral', marginBottom: '10px' }}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> {/* Banner Section Ends */}

			{/* <div className="blog-section">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="row">
								<div className="col-md-12">
									<div style={{ height: '180px', background: 'violet', marginBottom: '10px' }}></div>
								</div>
								<div className="col-md-12">
									<div style={{ height: '180px', background: 'violet', marginBottom: '10px' }}></div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="col-md-12">
								<div style={{ height: '117px', background: 'violet', marginBottom: '10px' }}></div>
							</div>
							<div className="col-md-12">
								<div style={{ height: '117px', background: 'violet', marginBottom: '10px' }}></div>
							</div>
							<div className="col-md-12">
								<div style={{ height: '117px', background: 'violet', marginBottom: '10px' }}></div>
							</div>
						</div>
					</div>	
				</div>	
			</div> Banner Section Ends */}

			<div className="blog-scrollar">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div style={{ height: '150px', background: 'salmon', marginBottom: '10px' }}></div>
						</div>
						<div className="col-md-3">
							<div style={{ height: '150px', background: 'salmon', marginBottom: '10px' }}></div>
						</div>
						<div className="col-md-3">
							<div style={{ height: '150px', background: 'salmon', marginBottom: '10px' }}></div>
						</div>
						<div className="col-md-3">
							<div style={{ height: '150px', background: 'salmon', marginBottom: '10px' }}></div>
						</div>
					</div>
				</div>
			</div> {/* Banner Scrollar Ends */}

			<Footer />
        </>
    );
}


