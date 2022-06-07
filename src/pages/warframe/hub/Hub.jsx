import React, { Component } from "react";
import "./Hub.scss";

import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import Widget from "../../../components/widget/Widget";


class Hub extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			error: null,
			worldState: null,
		};
	}

	componentDidMount() {
		fetch("https://api.warframestat.us/pc")
			.then((res) => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						worldState: result,
					});
				},
				// Remarque : il est important de traiter les erreurs ici
				// au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
				// des exceptions provenant de réels bugs du composant.
				(error) => {
					  this.setState({
					    isLoaded: true,
					    error
					  });
				}
			);
	}


	render() {
		const { error, isLoaded, worldState } = this.state;
		if (error) {
			return (
				<div className="hub">
					<Sidebar />
					<div className="hubContainer">
						<Navbar />
						<div>Error: {error.message}</div>
					</div>
				</div>
			);
		} else if (!isLoaded) {
			return (
				<div className="hub">
					<Sidebar />
					<div className="hubContainer">
						<Navbar />
						<div>Loading...</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className="hub">
					<Sidebar />
					<div className="hubContainer">
						<Navbar />
						<div className="widgets">
							<Widget type="cetus" cycle={this.state.worldState.cetusCycle}/>
							<Widget type="vallis" cycle={this.state.worldState.vallisCycle} />
							<Widget type="cambion" cycle={this.state.worldState.cambionCycle} />
						</div>
					</div>
				</div>
			);
		}
	}
}
export default Hub;
