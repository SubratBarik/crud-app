import React from "react";
import { Link } from 'react-router-dom';

function TopMenu() {
    return (
        <>
            <div className="header">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div style={{ height: '150px', background: 'limegreen', textAlign: 'center', lineHeight: '150px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>LOGO</Link></div>
						</div>
						<div className="col-md-9">							
							<div className="row">
								<div className="col-md-12">
									<div style={{ height: '69px', background: 'limegreen', marginBottom: '10px' }}>
										<ul className="nav justify-content-end">
											<li className="nav-item">
												<Link className="nav-link active" to="/" style={{ color: 'white', textDecoration: 'none', lineHeight: '45px' }}>Home</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" to="/about-us" style={{ color: 'white', textDecoration: 'none', lineHeight: '45px' }}>About Us</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" to="/services" style={{ color: 'white', textDecoration: 'none', lineHeight: '45px' }}>Services</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" to="/contact-us" style={{ color: 'white', textDecoration: 'none', lineHeight: '45px' }}>Contact Us</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-md-12">
									<div style={{ height: '69px', background: 'limegreen' }}></div>
								</div>
							</div>							
						</div>
					</div>
				</div>
			</div> {/* Header Ends */}
        </>
    );
}

export default TopMenu;
