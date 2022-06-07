import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faCalculator, faCircleNodes, faIdCardClip, faUser } from '@fortawesome/free-solid-svg-icons'

class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
				<div className="top">
					<span className="logo">Oboard</span>
				</div>
				<hr />
				<div className="center">
					<ul>
						<p className="title">MAIN</p>
						<li>
							<FontAwesomeIcon icon={faIdCardClip} className="icon"/>
							<Link to="/">Portfolio</Link>
						</li>
						<p className="title">WARFRAME</p>
						<li>
							<FontAwesomeIcon icon={faCircleNodes} className="icon"/>
							<Link to="/warframe/hub">Hub</Link>
						</li>
						<li>
							<FontAwesomeIcon icon={faCalculator} className="icon"/>
							<span>Damage calculator</span>
						</li>
						<p className="title">USER</p>
						<li>
							<FontAwesomeIcon icon={faUser} className="icon"/>
							<span>Profile</span>
						</li>
						<li>
							<FontAwesomeIcon icon={faArrowRightFromBracket} className="icon"/>
							<span>Logout</span>
						</li>
					</ul>
				</div>
				<div className="bottom">
					<div className="colorOption"></div>
					<div className="colorOption"></div>
				</div>
			</div>
		);
	}
}

export default Sidebar;
