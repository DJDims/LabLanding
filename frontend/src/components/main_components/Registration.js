import axios from 'axios';
import React, { useState } from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function Registration({ thisRef }) {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [birthday, setBirthday] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [education, setEducation] = useState('');

	const {
		register,
		formState: {
			errors,
		},
		handleSubmit,
		reset,
	} = useForm();

	const Register = async (data) => {
		styleInvalidInputs();
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
			reset();
		} catch (err) {
			if (err.response) {
				console.log(err);
			}
		}
	}

	const styleInvalidInputs = () => {
		checkInput('firstname_input', firstname);
		checkInput('lastname_input', lastname);
		checkInput('birthday_input', birthday);
		checkInput('email_input', email);
		checkInput('phone_input', phone);
		checkInput('education_select', education);
	}

	const checkInput = (inputId, value) => {
		if (value === '') {
			document.getElementById(inputId).classList.add('is-invalid');
		} else {
			document.getElementById(inputId).classList.remove('is-invalid');
		}
	}

	return (
		<Card className='mt-4' ref={thisRef}>
			<Card.Header>
				<Card.Title>Регист<span>Ra</span>ция</Card.Title>
			</Card.Header>
			<Card.Body>
				<Form onSubmit={handleSubmit(Register, styleInvalidInputs)}>
					<Row>
						<Col className='col-6'>{/* col-4 offset-md-1 */}
							<Form.Group className="mb-3" >
								<Form.Label>Имя</Form.Label>
								<Form.Control type="text" id='firstname_input' placeholder="Имя" {...register('firstname', { required: true })} value={firstname} onChange={(e) => setFirstname(e.target.value)} />
							</Form.Group>
							<Form.Group className="mb-3" >
								<Form.Label>Фамилия</Form.Label>
								<Form.Control type="text" id='lastname_input' placeholder="Фамилия" {...register('lastname', { required: true })} value={lastname} onChange={(e) => setLastname(e.target.value)} />
							</Form.Group>
							<Form.Group className="mb-3" >
								<Form.Label>Дата рождения</Form.Label>
								<Form.Control type="date" id='birthday_input' placeholder="Дата рождения" {...register('birthday', { required: true })} value={birthday} onChange={(e) => setBirthday(e.target.value)} />
							</Form.Group>
						</Col>
						<Col className='col-6'>{/* col-4 offset-md-2 */}
							<Form.Group className="mb-3" >
								<Form.Label>Почта</Form.Label>
								<Form.Control type="email" id='email_input' placeholder="Почта" {...register('email', { required: true })} value={email} onChange={(e) => setEmail(e.target.value)} />
							</Form.Group>
							<Form.Group className="mb-3" >
								<Form.Label>Телефон</Form.Label>
								<Form.Control type="phone" id='phone_input' placeholder="Телефон" {...register('phone', { required: true })} value={phone} onChange={(e) => setPhone(e.target.value)} />
							</Form.Group>
							<Form.Group className="mb-3" >
								<Form.Label>Образование</Form.Label>
								<Form.Select aria-label="Default select example" id='education_select' {...register('education', { required: true })} onChange={(e) => setEducation(e.target.value)}>
									<option key={0} value="">Выберите</option>
									<option key={1} value="Basic">Основное</option>
									<option key={2} value="Secondary">Среднее</option>
									<option key={3} value="Higher">Высшее</option>
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
	)
}
