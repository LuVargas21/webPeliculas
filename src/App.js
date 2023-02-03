import React from "react";
//import { BrowserRouter, Switch, Route} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";
import Blog from "./views/blog";
import ListadoPeliculas from "./views/listadoPeliculas";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/blog">
					<Blog />
				</Route>
				<Route path="/">
					<ListadoPeliculas />
				</Route>
			</Switch>
		</Router>
	);
}
export default App;
