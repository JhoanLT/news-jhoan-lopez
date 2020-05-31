import React from "react";
import AppContainer from "./components";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={AppContainer} />
				<Route exact path="/popular" component={AppContainer} />
				<Route exact path="/categoria/:categoryName" component={AppContainer} />
				<Route exact path="/search/:searchValue" component={AppContainer} />
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default App;
