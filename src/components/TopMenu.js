import React from "react";

function TopMenu() {
    return (
        <>
            <div className="header">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div style={{ height: '150px', background: 'limegreen', textAlign: 'center', lineHeight: '150px' }}><a href="/" style={{ color: 'white', textDecoration: 'none' }}>LOGO</a></div>
						</div>
						<div className="col-md-9">							
							<div className="row">
								<div className="col-md-12">
									<div style={{ height: '69px', background: 'limegreen', marginBottom: '10px' }}>
										<ul className="nav justify-content-end">
											<li className="nav-item">
												<a className="nav-link active" href="/" style={{ color: 'white', textDecoration: 'none', lineHeight: '45px' }}>Home</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="/about-us" style={{ color: 'white', textDecoration: 'none', lineHeight: '45px' }}>About Us</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="/services" style={{ color: 'white', textDecoration: 'none', lineHeight: '45px' }}>Services</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="/contact-us" style={{ color: 'white', textDecoration: 'none', lineHeight: '45px' }}>Contact Us</a>
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
