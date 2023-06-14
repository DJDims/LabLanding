import React from 'react'
import {Card, Button} from 'react-bootstrap';

export default function About({ thisRef, regFunc }) {
  return (
	<Card className='mt-4' ref={thisRef}>
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
				<Button variant="primary" className='col-4 col-xxl-2 mx-auto mt-3' onClick={regFunc}>Регистрация</Button>
			</div>
		</Card.Body>
	</Card>
  )
}
