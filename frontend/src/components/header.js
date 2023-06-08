import React, { useRef } from 'react';
import { Container } from 'react-bootstrap/';
import { Nav } from 'react-bootstrap/';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

import logo from '../assets/LogoIVKHK.png'

export default function Header({funcs}) {
	const [name, setName] = React.useState();
	let menu = [];
	let navbar_admin = [];

	React.useEffect(() => {
		refreshToken();
	});

	const refreshToken = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/user/token`);
			const decoded = await jwt_decode(response.data.accessToken);
			setName(decoded.name);
		} catch (error) {
			if (error.response) {
				console.log(error)
			}
		}
	}

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	};

	{if (window.location.href === 'http://localhost:3000/') {
		menu = [
			{onclick: scrollToTop, title: "Home"},
			{onclick: funcs[0], title: "О профессии"},
			{onclick: funcs[1], title: "Навыки"},
			{onclick: funcs[2], title: "Условия поступления"},
			{onclick: funcs[3], title: "Галерея"},
			{onclick: funcs[4], title: "Возможности"},
			{onclick: funcs[5], title: "Регистрация"},
		];				
	}}


	if (name === 'admin') {
		navbar_admin = [
			{name: 'Заявки', href: '/admin'},
			{name: 'Выход', href: '/logout'}
		];
	} else {
		navbar_admin = [
			{name: 'Вход', href: '/login'}
		];
	}

	return (
		<Navbar bg="light" expand="lg" sticky='top' collapseOnSelect>
			<Container>
				<Navbar.Brand href="/"><img src={logo} height={56} />Kutsehariduskeskus</Navbar.Brand>
				<NavbarToggle aria-controls='responsive-navbar-nav' />
				<NavbarCollapse id='responsive-navbar-nav'>
					<Nav className='me-auto align-items-center'>
						{menu.map((value, i) => (
							<Nav.Link href='' onClick={value.onclick}>{value.title}</Nav.Link>
						))}
					</Nav>
					<Nav className='justify-content-end flex-grow-1 pe-3'>
						{navbar_admin.map((value, i) => (
							<Nav.Link href={value.href} key={i}>{value.name}</Nav.Link>
						))}
					</Nav>
				</NavbarCollapse>
			</Container>
		</Navbar>
	)
}