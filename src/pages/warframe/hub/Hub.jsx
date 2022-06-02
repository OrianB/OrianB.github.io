import React, { Component } from "react";
import "./Hub.scss";

import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import Widget from "../../../components/widget/Widget";


class Hub extends Component {
	render() {
		return (
			<div className="hub">
				<Sidebar />
				<div className="hubContainer">
					<Navbar />
					<div className="widgets">
						<Widget type="cetus" />
						<Widget type="vallis" />
						<Widget type="cambion" />
					</div>
				</div>
			</div>
		);
	}
}
export default Hub;
