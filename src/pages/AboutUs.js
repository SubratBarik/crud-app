import React, {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUs(props) {

	// State to manage text input
	const [text, setText] = useState('');

	// Functions to handle text conversion
	const handleOnChange = (event) => {
		//console.log("Text changed");
		setText(event.target.value);
	}

	const handleUpClick = () => {
		//console.log("Uppercase button clicked");
		setText(text.toLocaleUpperCase());
	}

	const handleLwClick = () => {
		//console.log("Lowercase button clicked");
		setText(text.toLocaleLowerCase());
	}

	const handleNrClick = () => {
		//console.log("Normalcase button clicked");
		setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
	}

	// const handleClrlick =() => {
	// 	setText('');
	// }

    return (
        <>
            <Header />

            <div className="table-section">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div style={{ height: '550px', background: 'Turquoise', marginBottom: '10px', padding: '10px' }}>
								<h3 className="text-center">{props.title}</h3>
								<div className="row">
									<div className="col-md-6">
										<textarea className="form-control my-3" rows="5" onChange={handleOnChange} ></textarea>
										<button className="btn btn-primary mx-2" onClick={handleUpClick}>UpperCase</button>
										<button className="btn btn-primary  mx-2" onClick={handleLwClick}>LowerCase</button>
										<button className="btn btn-primary mx-2" onClick={handleNrClick}>NormalCase</button>
										{/* <button className="btn btn-primary mx-2" onClick={handleClrlick}>Clear</button> */}
									</div>
									<div className="col-md-6">
										<p className="text-justify my-5" style={{ color: 'black', fontSize: '15px' }}>{text}</p>
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

