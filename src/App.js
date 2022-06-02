import React, { Component } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import Home from "./pages/home/Home";
import Hub from "./pages/warframe/hub/Hub";

class App extends Component {
	render() {
		return (
			<div className="App">
				<HashRouter>
					<Routes>
						<Route path="/">
							<Route index element={<Home />} />
							<Route path="warframe">
								{/* <Route index element={<UreJsx />} /> */}
								<Route path="hub" element={<Hub />} />
							</Route>
						</Route>
					</Routes>
				</HashRouter>
			</div>
		);
	}
}
export default App;
