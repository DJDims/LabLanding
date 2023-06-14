import React from 'react';
import {Card, Button, Accordion} from 'react-bootstrap';

import opportunities from '../../data/opportunities.json';

export default function Opportunities({ thisRef, regFunc }) {
  return (
	<Card className='mt-4' ref={thisRef}>
		<Card.Header>
			<Card.Title>Возможнос<span>Ti</span></Card.Title>
		</Card.Header>
		<Card.Body>
			<Accordion defaultActiveKey="0">
				{opportunities.map((element, index) => (
					<Accordion.Item eventKey={index}>
						<Accordion.Header>{element.header}</Accordion.Header>
						<Accordion.Body>{element.text}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
			<div className='row justify-content-center'>
				<Button variant="primary" className='col-4 col-xxl-2 mx-auto mt-3' onClick={regFunc}>Регистрация</Button>
			</div>
		</Card.Body>
	</Card>
  )
}
