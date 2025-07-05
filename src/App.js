import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Contact from './pages/ContactUs';
import Service from './pages/Services';
import NotFound from './components/NotFound';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>	
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<About />} />
				<Route path="/contact-us" element={<Contact />} />
				<Route path="/services" element={<Service />} />
				<Route path="/*" element={<NotFound />} />
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
