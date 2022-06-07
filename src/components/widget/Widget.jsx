import React, { Component } from "react";
import "./Widget.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faSnowflake, faFire, faF, faV} from '@fortawesome/free-solid-svg-icons'

export class Widget extends Component {	constructor(props) {
	super(props);
	this.state = {
		state: null,
		icon: null,
		timeLeftMilliseconds: null,
		timeLeft: null,
	};
}

	componentDidMount() {
		let cycle = this.props.cycle;
		let state = cycle.state;
		let icon = null;
		switch (this.props.type) {
			case "cetus":
				icon = cycle.isDay
					? faSun
					: faMoon;
				break;
			case "vallis":
				icon = cycle.isWarm
					? faFire
					: faSnowflake;
				break;
			case "cambion":
				icon = cycle.state == "fass" ? faF : faV;
				state = cycle.active;
				break;
		}

		let timeLeftMilliseconds =
			new Date(cycle.expiry).getTime() - new Date().getTime();
		let timeLeft = {
			hours: Math.floor(
				(timeLeftMilliseconds / (1000 * 60 * 60)) % 24
			),
			minutes: Math.floor(
				(timeLeftMilliseconds / 1000 / 60) % 60
			),
			seconds: Math.floor((timeLeftMilliseconds / 1000) % 60),
		};

		this.setState({
			state: state,
			icon: icon,
			expiry: cycle.expiry,
			timeLeftMilliseconds: timeLeftMilliseconds,
			timeLeft:
				timeLeft.hours +
				"H " +
				timeLeft.minutes +
				"M " +
				timeLeft.seconds +
				"S",
		});
	}


	render() {
		console.log(this.props);
		return (
			<div className={`widget ${this.state.state}`}>
				<div className="left">
					<span className="title">{this.props.type.toUpperCase()}</span>
					<span className="counter">{this.state.timeLeft}</span>
					{/* <span className="link">see bounty</span> */}
				</div>
				<div className="right">
					<div className="icon">
						{this.state.icon != null ? <FontAwesomeIcon icon={this.state.icon} className="icon" /> : ""}
					</div>
				</div>
			</div>
		);
	}
}

export default Widget;
