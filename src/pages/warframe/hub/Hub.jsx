import React, { Component } from "react";
import "./Hub.scss";

import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";

class Hub extends Component {
	render() {
		return (
			<div className="hub">
				<Sidebar />
				<div className="hubContainer">
					<Navbar />
					hub container
				</div>
			</div>
		);
	}
}
export default Hub;
