import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="top">
				<span className="logo">Oboard</span>
			</div>
            <hr />
			<div className="center">
				<ul>
					<li>
                    <p className="title">MAIN</p>
                        <DashboardIcon className="icon" />
						<span>Dashboard</span>
					</li>
                    <p className="title">SERVICE</p>
					<li>
                        <SettingsIcon className="icon" />
						<span>Settings</span>
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
			<div className="bottom">color options</div>
		</div>
	);
};

export default Sidebar;
