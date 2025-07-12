import Reac, {useState} from "react";
import { Link } from 'react-router-dom';

function Header() {

	// State to manage theme toggle
	const [isActive, setIsActive] = useState(false);

	// Function to handle theme change
	const themeChange = () => {
		//console.log("Toggle changed");
		setIsActive(prev => !prev);
	}

    return (
        <>
            <div className="header">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div style={{ height: '69px', background: 'limegreen', textAlign: 'center', lineHeight: '69px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>LOGO</Link></div>
						</div>
						<div className="col-md-9">							
							<div className="row">
								<div className="col-md-12">
									<div style={{ height: '69px', background: 'limegreen' }}>
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
												<Link className="nav-link" to="/shop" style={{ color: 'white', textDecoration: 'none', lineHeight: '45px' }}>Shop</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" to="/contact-us" style={{ color: 'white', textDecoration: 'none', lineHeight: '45px' }}>Contact Us</Link>
											</li>
											<li className="nav-item mx-3" style={{ lineHeight: '60px', color: 'white', textDecoration: 'none', fontSize: '20px', cursor: 'pointer', fontWeight: 'bold' }}>
												<i className={isActive ? 'bi bi-toggle-on' : 'bi bi-toggle-off'} onClick={themeChange}></i>
											</li>
										</ul>
									</div>
								</div>
							</div>							
						</div>
					</div>
				</div>
			</div> {/* Header Ends */}
        </>
    );
}

export default Header;
