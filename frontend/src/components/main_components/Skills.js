import React from 'react'
import {Card, Button} from 'react-bootstrap';

export default function Skills({ thisRef, regFunc }) {
  return (
	<Card className='mt-4' ref={thisRef}>
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
				<Button variant="primary" className='col-4 col-xxl-2 mx-auto mt-3' onClick={regFunc}>Регистрация</Button>
			</div>
		</Card.Body>
	</Card>
  )
}
