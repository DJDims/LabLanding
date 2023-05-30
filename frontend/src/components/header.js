import React from 'react';
import { Container } from 'react-bootstrap/';
import { Nav } from 'react-bootstrap/';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default function Header() {
	const [role, setRole] = React.useState('');
	let navbar_admin = [];

	React.useEffect(() => {
		refreshToken();
	});

	const profession = useRef();
	const skills = useRef();
	const requirements = useRef();
	const gallery = useRef();
	const opportunities = useRef();
	const registration = useRef();

	function professionClick() {
		profession.current.scrollIntoView({ behavior: 'smooth' });
	}
	function skillsClick() {
		skills.current.scrollIntoView({ behavior: 'smooth' });
	}
	function requirementsClick() {
		requirements.current.scrollIntoView({ behavior: 'smooth' });
	}
	function galleryClick() {
		gallery.current.scrollIntoView({ behavior: 'smooth' });
	}
	function opportunitiesClick() {
		opportunities.current.scrollIntoView({ behavior: 'smooth' });
	}
	function registrationClick() {
		registration.current.scrollIntoView({ behavior: 'smooth' });
	}

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	};

	const refreshToken = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/users/token`);
			const decoded = jwt_decode(response.data.accessToken);
			setRole(decoded.role);
		} catch (error) {
			if (error.response) {

			}
		}
	}

	if (role === 'admin') {
		navbar_admin = [
			{name: 'Заявки', href: '/registers'},
			{name: 'Выход', href: '/logout'}
		];
	}

	return (
		<Navbar bg="light" expand="lg" sticky='top' collapseOnSelect>
			<Container>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<NavbarToggle aria-controls='responsive-navbar-nav' />
				<NavbarCollapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link onClick={scrollToTop} href='/'>Home</Nav.Link>
						
						<Nav.Link onClick={professionClick} href='/'>О профессии</Nav.Link>
						<Nav.Link onClick={skillsClick} href='/'>Навыки</Nav.Link>
						<Nav.Link onClick={requirementsClick} href='/'>Условия поступления</Nav.Link>
						<Nav.Link onClick={galleryClick} href='/'>Галерея</Nav.Link>
						<Nav.Link onClick={opportunitiesClick} href='/'>Возможности</Nav.Link>
						<Nav.Link onClick={registrationClick} href='/'>Регистрация</Nav.Link>
					</Nav>
				</NavbarCollapse>
			</Container>
		</Navbar>
	)
}