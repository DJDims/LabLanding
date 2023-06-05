import React, { useState, useRef } from 'react';
import {Card, Button, Col, Row} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import parse from 'html-react-parser'
import Footer from '../components/Footer.js';

import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';

import atom from '../assets/atom.png';
import kolba1 from '../assets/kolba1.png';
import kolba2 from '../assets/kolba2.png';
import microskop from '../assets/microskop.png';

import formulas from '../data/formulas.json'



export default function Main() {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [birthday, setBirthday] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [education, setEducation] = useState('');

	const Register = async (e) => {
		e.preventDefault();
		try {
			await axios.post(`http://localhost:5000/register/`, {
				firstname: firstname,
				lastname: lastname,
				birthday: birthday,
				email: email,
				phone: phone,
				education: education
			});
			setFirstname('');
			setLastname('');
			setBirthday('');
			setEmail('');
			setPhone('');
			setEducation('');
		} catch (err) {
			// if (err.response) {
			// 	setMsg(err.response.data.msg);
			// }
		}
	}

	const aboutRef = useRef();
	const skillsRef = useRef();
	const requirementsRef = useRef();
	const galleryRef = useRef();
	const opportunitiesRef = useRef();
	const registrationRef = useRef();
	
	function registrationClick() {
		registrationRef.current.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<>
			{formulas.map((e) => (
					<>
						<p className='formula' style={{top: e.top, left: e.left}}>{parse(e.formula)}</p>
					</>
				))}
			{formulas.map((e) => (
				<>
					<p className='formula' style={{top: e.top+1112, left: e.left}}>{parse(e.formula)}</p>
				</>
			))}
			{formulas.map((e) => (
				<>
					<p className='formula' style={{top: e.top+2244, left: e.left}}>{parse(e.formula)}</p>
				</>
			))}
			
			<main className='col-11 col-sm-10 col-md-9 col-lg-8 mx-auto'>
				<Card className='mt-4'>
					<Card.Body className='banner'>
						<Row>
							<Col className='col-3 col-xl-2'><img src={kolba1} className='kolba1' alt='kolba1'/></Col>
							<Col className='col-6 col-xl-8'><Card.Title className='text-center'>Face the fear</Card.Title></Col>
							<Col className='col-3 col-xl-2'><img src={kolba2} className='kolba2' alt='kolba2'/></Col>
						</Row>
						<Row>
							<Card.Title className='text-center'>Build the future</Card.Title>
						</Row>
						<Row>
							<Col className='col-3 col-xl-2'><img src={atom} className='atom' alt='atom'/></Col>
							<Col className='col-6 col-xl-8'><Card.Title className='text-center'>With chemistry</Card.Title></Col>
							<Col className='col-3 col-xl-2'><img src={microskop} className='microskop' alt='microskop'/></Col>
						</Row>
					</Card.Body>
				</Card>
				<Card className='mt-4' ref={aboutRef}>
					<Card.Header>
						<Card.Title>О про<span>Fe</span>ссии</Card.Title>
					</Card.Header>
					<Card.Body>
						<Card.Text>Основная задача лаборанта – определять химический состав и качество различных видов сырья, материалов, готовой продукции, параметров окружающей среды. Он может анализировать пробы воды и грунта, качество пищевых продуктов и напитков. Проводя мониторинг параметров окружающей среды по результатам анализов шума, загрязнения воздуха и чистоты воды, лаборант может способствовать решению экологических проблем.</Card.Text>
						<Card.Text>Работа лаборанта требует:</Card.Text>
						<ul className="list-group">
							<li className="list-group-item">аккуратности</li>
							<li className="list-group-item">корректности</li>
							<li className="list-group-item">умения работать в команде</li>
							<li className="list-group-item">чувства ответственности</li>
						</ul>
						<div className='row justify-content-center'>
							<Button variant="primary" className='col-4 col-xxl-2 mx-auto mt-3' onClick={registrationClick}>Регистрация</Button>
						</div>
					</Card.Body>
				</Card>
				<Card className='mt-4' ref={skillsRef}>
					<Card.Header>
						<Card.Title><span>Na</span>выки</Card.Title>
					</Card.Header>
					<Card.Body>
						<ul className="list-group">
							<li className="list-group-item">изучает основы работы в химической лаборатории (профессиональная терминология, общепринятые нормы и правила лабораторной работы, оборудование лаборатории, химические реактивы и посуда, принципы работы аппаратуры и измерительных приборов)</li>
							<li className="list-group-item">на основании методики выполняет различные химические анализы, регистрирует показания приборов и оборудования</li>
							<li className="list-group-item">заполняет лабораторную документацию ( маркировка и регистрация проб, составление протокола анализа), рассчитывает и обрабатывает результаты анализа</li>
						</ul>
						<div className='row justify-content-center'>
							<Button variant="primary" className='col-4 col-xxl-2 mx-auto mt-3' onClick={registrationClick}>Регистрация</Button>
						</div>
					</Card.Body>
				</Card>
				<Card className='mt-4' ref={requirementsRef}>
					<Card.Header>
						<Card.Title>
							<Card.Title>Усл<span>O</span>вия пост<span>U</span>пления</Card.Title>
						</Card.Title>
					</Card.Header>
					<Card.Body>
						<Card.Text>Сумма оценок аттестата по 4-м выбранным предметам (eesti keel / eesti keel teise keelena, A-võõrkeel, matemaatika, keemia) - max 20p</Card.Text>
						<Card.Text>Тест - max 10p</Card.Text>
						<Card.Text>Собеседование - max 20p</Card.Text>
						<Card.Text>Всего - max 50p</Card.Text>
						<Card.Text>Проходной балл - min 20p</Card.Text>
						<div className='row justify-content-center'>
							<Button variant="primary" className='col-4 col-xxl-2 mx-auto mt-3' onClick={registrationClick}>Регистрация</Button>
						</div>
					</Card.Body>
				</Card>
				<Card className='mt-4' ref={galleryRef}>
					<Card.Header>
						<Card.Title><span>Ga</span>лерея</Card.Title>
					</Card.Header>
					<Card.Body>
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src={slide1} alt="Slide 1"/>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={slide2} alt="Slide 2"/>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={slide3} alt="Slide 3"/>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={slide4} alt="Slide 4"/>
							</Carousel.Item>
						</Carousel>
						<div className='row justify-content-center'>
							<Button variant="primary" className='col-4 col-xxl-2 mx-auto mt-3' onClick={registrationClick}>Регистрация</Button>
						</div>
					</Card.Body>
				</Card>
				<Card className='mt-4' ref={opportunitiesRef}>
					<Card.Header>
						<Card.Title>Возможнос<span>Ti</span></Card.Title>
					</Card.Header>
					<Card.Body>
						
					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>Erasmus+</Accordion.Header>
							<Accordion.Body>Ida-Virumaa Kutsehariduskeskus сотрудничает с программой Erasmus+, которая предоставляет ученикам возможность проходить практику за границей.</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>Парикмахерская</Accordion.Header>
							<Accordion.Body>В парикмахерской учебного заведения Kutsehariduskeskus вы сможете воспользоваться услугами юных мастеров по очень выгодной цене.</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>Ателье</Accordion.Header>
							<Accordion.Body>В ателье учебного заведения  вам на заказ смогут пошить одежду любого типа по благоприятной стоимости и качества.</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>Автомастерская</Accordion.Header>
							<Accordion.Body>В автомастерской учебного заведения вам смогут сделать диагностику автомобиля, а так же ремонт вашего транспорта по выгодной цене.</Accordion.Body>
						</Accordion.Item>
					</Accordion>

						<div className='row justify-content-center'>
							<Button variant="primary" className='col-4 col-xxl-2 mx-auto mt-3' onClick={registrationClick}>Регистрация</Button>
						</div>
					</Card.Body>
				</Card>
				<Card className='mt-4' ref={registrationRef}>
					<Card.Header>
						<Card.Title>Регист<span>Ra</span>ция</Card.Title>
					</Card.Header>
					<Card.Body>
					<Form onSubmit={Register}>
						<Row>
							<Col className='col-6'>{/* col-4 offset-md-1 */}
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Label>Имя</Form.Label>
									<Form.Control type="text" placeholder="Имя" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
								</Form.Group>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Label>Фамилия</Form.Label>
									<Form.Control type="text" placeholder="Фамилия" value={lastname} onChange={(e) => setLastname(e.target.value)} />
								</Form.Group>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Label>Дата рождения</Form.Label>
									<Form.Control type="date" placeholder="Дата рождения" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
								</Form.Group>
							</Col>
							<Col className='col-6'>{/* col-4 offset-md-2 */}
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Label>Почта</Form.Label>
									<Form.Control type="email" placeholder="Почта" value={email} onChange={(e) => setEmail(e.target.value)} />
								</Form.Group>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Label>Телефон</Form.Label>
									<Form.Control type="phone" placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)} />
								</Form.Group>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Label>Образование</Form.Label>
									<Form.Select aria-label="Default select example" onChange={(e) => setEducation(e.target.value)}>
										<option>Выберите</option>
										<option value="Basic">Основное</option>
										<option value="Secondary">Среднее</option>
										<option value="Higher">Высшее</option>
									</Form.Select>
								</Form.Group>
							</Col>
						</Row>
						<div className='row justify-content-center'>
							<Button variant="primary" className='col-4 mx-auto mt-3' type="submit">Зарегистрироваться</Button>
						</div>
					</Form>
					</Card.Body>
				</Card>
			</main>
			<Footer />
		</>
	);
}