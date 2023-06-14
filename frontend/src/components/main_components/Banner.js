import React from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap';

import atom from '../../assets/atom.png';
import kolba1 from '../../assets/kolba1.png';
import kolba2 from '../../assets/kolba2.png';
import microskop from '../../assets/microskop.png';

export default function Banner() {
  return (
	<Card className='mt-4'>
		<Card.Body className='banner'>
			<Row>
				<Col className='col-3 col-md-1 col-lg-2 col-xl-2'><img src={kolba1} className='kolba1' alt='kolba1' /></Col>
				<Col className='col-6 col-md-10 col-lg-8 col-xl-8'><Card.Title className='text-center'>Войдите в мир науки</Card.Title></Col>
				<Col className='col-3 col-md-1 col-lg-2 col-xl-2'><img src={kolba2} className='kolba2' alt='kolba2' /></Col>
			</Row>
			<Row>
				<Card.Title className='text-center'>на профессии</Card.Title>
			</Row>
			<Row>
				<Col className='col-3 col-md-1 col-lg-2 col-xl-2'><img src={atom} className='atom' alt='atom' /></Col>
				<Col className='col-6 col-md-10 col-lg-8 col-xl-8'><Card.Title className='text-center'>Лаборант</Card.Title></Col>
				<Col className='col-3 col-md-1 col-lg-2 col-xl-2'><img src={microskop} className='microskop' alt='microskop' /></Col>
			</Row>
		</Card.Body>
	</Card>
  )
}
