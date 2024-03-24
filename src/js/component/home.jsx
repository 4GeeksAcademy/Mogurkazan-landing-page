import React from "react";

import Navbar from "./navbar";
import Minicard from "./cards";
import Jumbotron from "./jumbotron";
import Footer from "./footer";


const Home = () => {
	return (
		<>
			<Navbar/>
			<div class="container">
					<Jumbotron/>
					<div className="row text-center">
						<Minicard/>
						<Minicard/>
						<Minicard/>
						<Minicard/>
					</div>	
			</div>
				
			<Footer/>
		</>
	);
};

export default Home;
