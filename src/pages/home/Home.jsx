import React, { Component } from "react";
import "./Home.scss";

import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

class Home extends Component {
	render() {
		return (
			<div className="home">
				<Sidebar />
				<div className="homeContainer">
					<Navbar />
					Home container
				</div>
			</div>
		);
	}
}

export default Home;
