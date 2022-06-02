import React, { Component } from "react";
import "./Widget.scss";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

export class Widget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.type.toUpperCase(),
			state: null,
			expiry: null,
			timeLeft: null,
			icon: null,
		};
	}

	componentDidMount() {
		fetch("https://api.warframestat.us/pc")
			.then((res) => res.json())
			.then(
				(result) => {
					let cycle = null;
					let icon = null;
					switch (this.props.type) {
						case "cetus":
							cycle = result.cetusCycle;
							icon = cycle.isDay
								? WbSunnyOutlinedIcon
								: DarkModeOutlinedIcon;
							break;
						case "vallis":
							cycle = result.vallisCycle;
							icon = cycle.isWarm
								? LocalFireDepartmentOutlinedIcon
								: AcUnitIcon;
							break;
						case "cambion":
							cycle = result.cambionCycle;
							cycle.state = cycle.active;
							icon = cycle.state == "fass" ? null : null;
							break;
					}
					let timeLeftMilliseconds =
						new Date(cycle.expiry).getTime() - new Date().getTime();
					let timeLeftDate = new Date(timeLeftMilliseconds);
					let timeLeft = {
						hours: Math.floor(
							(timeLeftMilliseconds / (1000 * 60 * 60)) % 24
						),
						minutes: Math.floor(
							(timeLeftMilliseconds / 1000 / 60) % 60
						),
						seconds: Math.floor((timeLeftMilliseconds / 1000) % 60),
					};
					console.log(cycle);
					console.log(timeLeft);

					this.setState({
						state: cycle.state,
						icon: icon,
						expiry: cycle.expiry,
						timeLeft:
							timeLeft.hours +
							"H " +
							timeLeft.minutes +
							"M " +
							timeLeft.seconds +
							"S",
					});
				},
				// Remarque : il est important de traiter les erreurs ici
				// au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
				// des exceptions provenant de réels bugs du composant.
				(error) => {
					//   this.setState({
					//     isLoaded: true,
					//     error
					//   });
				}
			);
	}

	render() {
		return (
			<div className={`widget ${this.state.state}`}>
				<div className="left">
					<span className="title">{this.state.title}</span>
					<span className="counter">{this.state.timeLeft}</span>
					<span className="link">see bounty</span>
				</div>
				<div className="right">
					<div className="icon">
						{this.state.icon != null ? <this.state.icon /> : ""}
					</div>
				</div>
			</div>
		);
	}
}

export default Widget;
