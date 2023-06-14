import React, { useState } from 'react';
import { Card, Button, Col, Row, Form, Accordion, Carousel } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import About from '../components/main_components/About.js';
import Banner from '../components/main_components/Banner.js';
import Galley from '../components/main_components/Galley.js';
import Opportunities from '../components/main_components/Opportunities.js';
import Registration from '../components/main_components/Registration.js';
import Requirements from '../components/main_components/Requirements.js';
import Skills from '../components/main_components/Skills.js';
import Footer from '../components/Footer.js';

export default function Main({ refs }) {
	const registrationClick = () => {
		refs[5].current.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<>
			<main className='col-11 col-sm-10 col-md-9 col-lg-8 mx-auto'>
				<Banner />
				<About thisRef={refs[0]} regFunc={registrationClick}/>
				<Skills thisRef={refs[1]} regFunc={registrationClick}/>
				<Requirements thisRef={refs[2]} regFunc={registrationClick}/>
				<Galley thisRef={refs[3]} regFunc={registrationClick}/>
				<Opportunities thisRef={refs[4]} regFunc={registrationClick}/>
				<Registration thisRef={refs[5]} />
			</main>
			<Footer />
		</>
	);
}