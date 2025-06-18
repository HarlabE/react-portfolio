import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../assets/portfolio/diaspora.jpg'
import img2 from '../assets/portfolio/BetaAir.jpg'
import img3 from '../assets/portfolio/Izin.png'
import img4 from '../assets/portfolio/sag.png'
import img5 from '../assets/portfolio/sky.png'
import img6 from '../assets/portfolio/ucml.png'


export const Portfolio = () => {
  return (
    <div id='portfolio'>
        <h1 style={{border:"5px solid #d7d7d7 ", margin: '40px auto 20px', padding:" 5px", textAlign:'center', width: '250px', color:'#d7d7d7'}}>Portfolio</h1>
        <Container className='my-5'>
            <div>
                <h2 className='text-light text-center text-md-start mb-5 mb-lg-2'>Mobile Development</h2>
                <Row className=''>
                    <Col>
                    <div className='text-center' style={{ marginBottom: '10vh'}}>
                        <img src={img1} className='port-img' alt="" />
                        <h6 className='mt-3 text-light'>Diaspora mobile app</h6>
                    </div>
                    
                    </Col>
                    <Col>
                    <div className='text-center' style={{ marginBottom: '10vh'}} >
                        <a href=""><img src={img2} className='port-img' alt="" /></a>
                        <h6 className='mt-3 text-light'>BetaAir Mobile App</h6>
                    </div>
                    
                    </Col>
                </Row>
                <Row>
                    <h2 className='text-light text-center text-md-start mb-5 mb-lg-2'>Web Development</h2>
                    <Col xs={12} md={6}>
                        <div className='text-center' >
                            <a href="https://www.izinakioya.com/"><img src={img3} className='port2-img' alt="" /></a>
                            <h6 className='text-light my-4'>Professional Portfolio Website</h6>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='text-center' >
                            <a href="https://saglogistics.co/g"><img src={img4} className='port2-img' alt="" /></a>
                            <h6 className='text-light my-4'>SAG logistics</h6>
                        </div>
                    </Col>
                    </Row>
                    <Row className='mt-5'>
                       <Col xs={12} md={6}>
                        <div className='text-center'>
                            <img src={img5} className='port2-img' alt="" />
                            <h6 className='text-light my-4'>Skymark Partners Invesment management</h6>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='text-center' >
                            <img src={img6} className='port2-img' alt="" />
                            <h6 className='text-light my-4'>UCML capital</h6>
                        </div>
                    </Col> 
                    </Row>
                    
                
            </div>
            <h6 className='text-light my-5 '>And More To Come</h6>
        </Container>
    </div>
  )
}
