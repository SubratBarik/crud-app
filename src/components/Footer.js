import React from "react";

function Footer() {
    return (
        <>
        <div className="footer">
				<div className="container">
					{/* <div className="row">
						<div className="col-md-4">
							<div style={{ height: '150px', background: 'tan', marginBottom: '10px' }}></div>
						</div>
						<div className="col-md-4">
							<div style={{ height: '150px', background: 'tan', marginBottom: '10px' }}></div>
						</div>
						<div className="col-md-4">
							<div style={{ height: '150px', background: 'tan', marginBottom: '10px' }}></div>
						</div>
					</div> */}
					<div className="row">
						<div className="col-md-6">
							<div style={{ height: '50px', background: 'tan' }}></div>
						</div>
						<div className="col-md-6">
							<div style={{ height: '50px', background: 'tan' }}></div>
						</div>
					</div>
				</div>
			</div> {/* Footer Ends */}
        </>
    );
}

export default Footer;
