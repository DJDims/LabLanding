import React from 'react'
import {Card, Button, Carousel} from 'react-bootstrap';

import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';
import slide4 from '../../assets/slide4.png';

export default function Galley({ thisRef, regFunc }) {
  return (
	<Card className='mt-4' ref={thisRef}>
		<Card.Header>
			<Card.Title><span>Ga</span>лерея</Card.Title>
		</Card.Header>
		<Card.Body>
			<Carousel>
				<Carousel.Item>
					<img className="d-block w-100" src={slide1} alt="Slide 1" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={slide2} alt="Slide 2" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={slide3} alt="Slide 3" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={slide4} alt="Slide 4" />
				</Carousel.Item>
			</Carousel>
			<div className='row justify-content-center'>
				<Button variant="primary" className='col-4 col-xxl-2 mx-auto mt-3' onClick={regFunc}>Регистрация</Button>
			</div>
		</Card.Body>
	</Card>
  )
}
