import React from "react";

function Footer() {
    return (
        <>
        <div className="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div style={{ height: '50px', background: 'tan' }}>
								<p className="text-center" style={{ paddingTop: '15px', color: 'white', lineHeight: '20px' }}>
									&copy; {new Date().getFullYear()} All rights reserved | Made with <i className="bi bi-heart-fill"></i></p>
							</div>
						</div>
					</div>
				</div>
			</div> {/* Footer Ends */}
        </>
    );
}

export default Footer;
