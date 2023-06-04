import React, { useEffect, useState } from 'react'
import {Card, Col, Row, Form} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';

export default function Admin() {

	const [registers, setRegisters] = useState([]);
	useEffect(() => {
		const getRegisters = async() => {
			const response = await axios.get(`http://localhost:5000/register`)
			setRegisters(response.data);
		}
		getRegisters();
	},[]);

	const [education, setEducation] = React.useState('');
	
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
							<Form>
								<Form.Select aria-label="Default select example" onChange={(e) => setEducation(e.target.value)}>
									<option value="">Все</option>
									<option value="Basic">Основное образование</option>
									<option value="Secondary">Среднее образование</option>
									<option value="Higher">Высшее образование</option>
								</Form.Select>
							</Form>
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