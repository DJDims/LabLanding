import axios from 'axios';
import React, { useState } from 'react'
import {Button, Card, Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const {
		register,
		formState: {
			errors,
		},
		handleSubmit,
	} = useForm();

	const Login = async (e) => {
		styleInvalidInputs("login_input", username);
		styleInvalidInputs("password_input", password);

		try {
			await axios.post(`http://localhost:5000/user/login`, {
				username: username,
				password: password
			});
			navigate('/admin');
			window.location.reload();
		} catch (err) {
			if (err.response) {
				console.log(err)
			}
		}
	}

	const styleInvalidInputs = (inputId, value) => {
		if (value == '') {
			document.getElementById(inputId).classList.add('is-invalid');
		} else {
			document.getElementById(inputId).classList.remove('is-invalid');
		}
	}
	
	return (
		<main className='col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-4 mx-auto'>
			<Card className='mt-4'>
				<Card.Header>
					<Card.Title>Форма входа<span></span></Card.Title>
				</Card.Header>
				<Card.Body>
					<Form onSubmit={handleSubmit(Login, styleInvalidInputs)}>
						<Form.Group className="mb-3 col-10 col-sm-8 mx-auto" controlId="exampleForm.ControlInput1">
							<Form.Label>Логин</Form.Label>
							<Form.Control type="text" id="login_input" placeholder="Логин" value={username} onChange={(e) => setUsername(e.target.value)} />
						</Form.Group>
						<Form.Group className="mb-3 col-10 col-sm-8 mx-auto" controlId="exampleForm.ControlInput1">
							<Form.Label>Пароль</Form.Label>
							<Form.Control type="password" id="password_input" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
						</Form.Group>
						<div className='row justify-content-center'>
							<Button variant="primary" className='col-5 col-md-3 mx-auto mt-3' type="submit">Войти</Button>
						</div>
					</Form>
				</Card.Body>
			</Card>
		</main>
	);
}