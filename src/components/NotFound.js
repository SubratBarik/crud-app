import React from "react";
import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";

function NotFound() {
    return (
        <>
            <TopMenu />

            <div className="table-section">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div style={{ height: '150px', background: 'Turquoise', marginBottom: '10px', textAlign: 'center' }}>
								<h2 style={{ lineHeight: '150px', color: 'white' }}>Page Not Found</h2>
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
