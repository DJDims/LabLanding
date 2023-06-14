import React from 'react'
import {Card, Button} from 'react-bootstrap';

export default function Requirements({ thisRef, regFunc }) {
  return (
	<Card className='mt-4' ref={thisRef}>
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
				<Button variant="primary" className='col-4 col-xxl-2 mx-auto mt-3' onClick={regFunc}>Регистрация</Button>
			</div>
		</Card.Body>
	</Card>
  )
}
