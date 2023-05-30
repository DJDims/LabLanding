import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className="footer mt-auto pt-3">
        <Container className="text-center mt-1 px-2 py-2" fluid style={{
            backgroundColor: "#198754",
            color:"#fff",
            height: '60px',
            position: 'relative'
            }}>
            <p>Design &copy; 2023 Kreivald Dmitrii | Node Express | Frontend React | Project School</p>
        </Container>
    </footer>
  )
}