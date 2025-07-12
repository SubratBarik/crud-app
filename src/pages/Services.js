import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services(props) {
    return (
         <>
            <Header />

            <div className="table-section">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div style={{ height: '550px', background: 'Turquoise', marginBottom: '10px', padding: '10px' }}>
								<h3 className="text-center">{props.title}</h3>
							</div>
						</div>
					</div>
				</div>
			</div> {/* Banner Scrollar Ends Turquoise */}

            <Footer />
        </>
    );
}

