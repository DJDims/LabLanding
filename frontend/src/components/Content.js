import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Admin from '../pages/Admin';
import Logout from '../pages/Logout';

export default function Content() {

	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Main />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/admin" element={<Admin />} />
				<Route exact path="/logout" element={<Logout />} />
			</Routes>
		</Router>
	)
}