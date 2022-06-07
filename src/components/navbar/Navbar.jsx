import React, { Component } from "react";
import "./Navbar.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faExpand, faMoon, faGlobe, faSearch, faList } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
	render() {
		return (
			<div className="navbar">
				<div className="wrapper">
					<div className="search">
						<input type="text" placeholder="Search..." />
							<FontAwesomeIcon icon={faSearch} className="icon"/>
					</div>

					<div className="items">
						<div className="item">
							<FontAwesomeIcon icon={faGlobe} className="icon"/>
							English
						</div>
						<div className="item">
							<FontAwesomeIcon icon={faMoon} className="icon"/>
						</div>
						<div className="item">
							<FontAwesomeIcon icon={faExpand} className="icon"/>
						</div>
						<div className="item">
							<FontAwesomeIcon icon={faBell} className="icon"/>
							<div className="counter">1</div>
						</div>
						<div className="item">
							<FontAwesomeIcon icon={faList} className="icon"/>
						</div>
						<div className="item">
							<img
								src="https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3771110.jpg&fm=jpg"
								alt=""
								className="avatar"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
