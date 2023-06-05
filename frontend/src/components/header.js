import React, { useRef } from 'react';
import { Container } from 'react-bootstrap/';
import { Nav } from 'react-bootstrap/';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

export default function Header() {
	const [name, setName] = React.useState();
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

	if (name === 'admin') {
		navbar_admin = [
			{name: 'Заявки', href: '/registers'},
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
				<Navbar.Brand href="/"><img src='../assets/LogoIVKHK.png' />Kutsehariduskeskus</Navbar.Brand>
				<NavbarToggle aria-controls='responsive-navbar-nav' />
				<NavbarCollapse id='responsive-navbar-nav'>
					<Nav className='me-auto align-items-center'>
						<Nav.Link onClick={scrollToTop}>Home</Nav.Link>
						
						<Nav.Link>О профессии</Nav.Link>
						<Nav.Link>Навыки</Nav.Link>
						<Nav.Link className='text-center'>Условия поступления</Nav.Link>
						<Nav.Link>Галерея</Nav.Link>
						<Nav.Link>Возможности</Nav.Link>
						<Nav.Link>Регистрация</Nav.Link>
					</Nav>
					<Nav className='justify-content-end flex-grow-1 pe-3'>
						{navbar_admin.map((value, i) => (
							<Nav.Link href={value.href} key={i}>{value.nameUser}{value.name}</Nav.Link>
						))}
					</Nav>
				</NavbarCollapse>
			</Container>
		</Navbar>
	)
}