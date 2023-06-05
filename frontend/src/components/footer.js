import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
	return (
		<div className="footer container-fluid mt-5">
			<Row>
				<Col className='col-6 col-sm-4 col-lg-3 col-xxl-2 offset-sm-2 offset-lg-3 offset-xxl-4'>
					<h5><span>К</span>онтакты</h5>
					<p className='kontakt'>Почта: info@ivkhk.ee</p>
					<p className='kontakt'>Телефон: +3723320381</p>
				</Col>
				<Col className='col-6'>
					<h5>Инфо<span>P</span>мация о поступле<span>Ni</span>и</h5>
					<p>по рабочим дням с 9:00 до 15:00</p>
					<p className='kontakt'>Почта: galina.trofimova@ivkhk.ee</p>
					<p className='kontakt'>Телефон: +3725283670</p>
				</Col>
				<Col className='col-12'>
					<div className='mt-3 mb-1 mx-auto col-12 col-md-8 col-xl-5 d-flex justify-content-between'>
						<a href='https://kutsehariduskeskus.ee/ru'>Официальный сайт</a>
						<a href='https://www.youtube.com/channel/UC6TPd9ePy3n-vFQRgtbhx-w'>Youtube</a>
						<a href='https://vk.com/ivkhk'>VKontakte</a>
						<a href='https://www.facebook.com/IVKHK'>Facebook</a>
						<a href='https://www.instagram.com/idavirumaa_kutsehariduskeskus/'>Instargramm</a>
					</div>
				</Col>
				<Col className='col-12 mt-3 mb-2'>
					<div className='mt-3 mb-1 mx-auto col-12 col-md-8 col-xl-5 d-flex justify-content-between'>
						<p>Dmitrii Kreivald</p>
						<p>Julia Badanova</p>
						<p>JPTV20</p>
						<p>19.06.23</p>
					</div>
				</Col>
			</Row>
		</div>
	)
}