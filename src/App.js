import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Contact from './pages/ContactUs';
import News from './pages/News';
import Shop from './pages/Shop';
import NotFound from './components/NotFound';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>	
		<Router>
			<Routes>
				<Route exact path="/" element={<Home title="Home"/>}/>
				<Route exact path="/about-us" element={<About title="About Us"/>}/>
				<Route exact path="/contact-us" element={<Contact title="Contact Us"/>}/>
				<Route exact path="/news" element={<News title="News"/>}/>
				<Route exact path="/shop" element={<Shop title="Shop"/>}/>
				<Route exact path="/*" element={<NotFound title="Sorry! Not Found"/>}/>
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
