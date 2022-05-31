import React, { Component } from "react";
import "./Navbar.scss";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

class Navbar extends Component {
	render() {
		return (
			<div className="navbar">
				<div className="wrapper">
					<div className="search">
						<input type="text" placeholder="Search..." />
						<SearchOutlinedIcon />
					</div>

					<div className="items">
						<div className="item">
							<LanguageOutlinedIcon className="icon" />
							English
						</div>
						<div className="item">
							<DarkModeOutlinedIcon className="icon" />
						</div>
						<div className="item">
							<FullscreenExitOutlinedIcon className="icon" />
						</div>
						<div className="item">
							<NotificationsNoneOutlinedIcon className="icon" />
							<div className="counter">1</div>
						</div>
						<div className="item">
							<ChatBubbleOutlineOutlinedIcon className="icon" />
							<div className="counter">2</div>
						</div>
						<div className="item">
							<ListOutlinedIcon className="icon" />
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
