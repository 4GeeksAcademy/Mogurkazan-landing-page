import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Minicard from "./cards";
import Jumbotron from "./jumbotron";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<div className="mainContent container">
				<Jumbotron/>
				<div className="d-flex">
					<Minicard/><Minicard/><Minicard/><Minicard/>
				</div>
				
			</div>
			<Footer/>
		</>
	);
};

export default Home;
