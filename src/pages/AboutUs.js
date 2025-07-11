import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutUs() {
    return (
        <>
            <Header />

            <div className="table-section">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div style={{ height: '550px', background: 'Turquoise', marginBottom: '10px' }}></div>
						</div>
					</div>
				</div>
			</div> {/* Banner Scrollar Ends Turquoise */}

            <Footer />
        </>
    );
}

export default AboutUs;
