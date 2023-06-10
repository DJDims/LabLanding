import React, { useEffect, useState } from 'react'
import {Card, Col, Row, Form, Collapse, Button, Accordion, Table} from 'react-bootstrap';
import axios from 'axios';

export default function Admin() {

	const [registers, setRegisters] = useState([]);
	const [sortprop, setSortprop] = useState('id');
	const [sortdir, setSortdir] = useState(true);
	useEffect(() => {
		const getRegisters = async() => {
			const response = await axios.get(`http://localhost:5000/register`)
			setRegisters(response.data);
		}
		getRegisters();
	},[]);

	const [education, setEducation] = React.useState('');
	const [open, setOpen] = useState(false);
	
	return (
		<main className='col-10 mx-auto'>
			<Card className='mt-4 d-none d-lg-block'>
				<Card.Header>
					<Card.Title>Поданные заявки<span></span></Card.Title>
				</Card.Header>
				<Card.Body>
					<Row className='mb-4'>
						<Col>
							<Card.Text>Всего: {registers.filter((register) => {if(register.education.includes(education)){return true;}}).length} заявок</Card.Text>
						</Col>
						<Col>
						<Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} >Показать настройки</Button>
						<Collapse in={open}>
							<div id="example-collapse-text">
							<Form.Group className="mb-2">
								<Form.Label>Фильтровать</Form.Label>
								<Form.Select onChange={(e) => setEducation(e.target.value)}>
									<option value="">Все</option>
									<option value="Basic">Основное образование</option>
									<option value="Secondary">Среднее образование</option>
									<option value="Higher">Высшее образование</option>
								</Form.Select>
							</Form.Group>
							<Form.Group className="mb-2">
								<Form.Label>Сортировать</Form.Label>
								<Form.Select onChange={(e) => setSortprop(e.target.value)}>
									<option value="id">Ид</option>
									<option value="firstname">Имя</option>
									<option value="lastname">Фамилия</option>
									<option value="birthday">Дата рождения</option>
								</Form.Select>
							</Form.Group>
							<Form.Group className="mb-2">
								<Form.Label>Направление сортировки</Form.Label>
								<Form.Select onChange={(e) => setSortdir(e.target.value)}>
									<option value="true">По возрастанию</option>
									<option value="false">По убыванию</option>
								</Form.Select>
							</Form.Group>
							</div>
						</Collapse>
						</Col>
					</Row>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Имя</th>
							<th>Фамилия</th>
							<th>Дата рождения</th>
							<th>Почта</th>
							<th>Телефон</th>
							<th>Образование</th>
						</tr>
					</thead>
					<tbody>
						{
							registers.filter((register) => {
								if(register.education.includes(education)){
									return true;
								}
							}).sort((a, b) => {
								console.log(sortdir)
								let direction = a[sortprop] > b[sortprop];
								if(sortdir === "true") direction = a[sortprop] < b[sortprop];
								if(direction === true) return -1
							}).map((register, index) => (
								<tr>
									<td>{index+1}</td>
									<td>{register.firstname}</td>
									<td>{register.lastname}</td>
									<td>{register.birthday}</td>
									<td>{register.email}</td>
									<td>{register.phone}</td>
									<td>{register.education}</td>
								</tr>
							))
						}
					</tbody>
				</Table>

				</Card.Body>
			</Card>
			<Accordion defaultActiveKey="0" className='mt-4 d-block d-lg-none'>
				{
					registers.map((register, index) => (
						<Accordion.Item eventKey={index}>
							<Accordion.Header>{register.firstname} {register.lastname}</Accordion.Header>
							<Accordion.Body>
								<p>Имя: {register.firstname}</p>
								<p>Фамилия: {register.lastname}</p>
								<p>Дата рождения: {register.birthday}</p>
								<p>Почта: {register.email}</p>
								<p>Телефон: {register.phone}</p>
								<p>Образование: {register.education}</p>
							</Accordion.Body>
						</Accordion.Item>
					))
				}
			</Accordion>
		</main>
	);
}