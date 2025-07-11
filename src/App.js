import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Contact from './pages/ContactUs';
import Service from './pages/Services';
import Shop from './pages/Shop';
import NotFound from './components/NotFound';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>	
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about-us" element={<About />} />
				<Route exact path="/contact-us" element={<Contact />} />
				<Route exact path="/services" element={<Service />} />
				<Route exact path="/shop" element={<Shop />} />
				<Route exact path="/*" element={<NotFound />} />
			</Routes>
		</Router>
		{/* <Home /> */}
		{/* <About /> */}
		{/* <Contact /> */}
		{/* <Service /> */}
		</>
	);
}

export default App;
