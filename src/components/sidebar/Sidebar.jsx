import React, { Component } from "react";
import "./Sidebar.scss";

import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import HubIcon from "@mui/icons-material/Hub";
import CalculateIcon from "@mui/icons-material/Calculate";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

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
							<EmojiEmotionsIcon className="icon" />
							<span>Portfolio</span>
						</li>
						<p className="title">WARFRAME</p>
						<li>
							<HubIcon className="icon" />
							<span>Hub</span>
						</li>
						<li>
							<CalculateIcon className="icon" />
							<span>Damage calculator</span>
						</li>
						<p className="title">USER</p>
						<li>
							<AccountCircleIcon className="icon" />
							<span>Profile</span>
						</li>
						<li>
							<LogoutIcon className="icon" />
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
