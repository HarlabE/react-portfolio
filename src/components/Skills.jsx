import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../assets/git.svg';
import img2 from '../assets/html.svg';
import img3 from '../assets/css.svg';
import img4 from '../assets/figma.svg';
import img5 from '../assets/js.svg';
import img6 from '../assets/react.svg';
import img7 from '../assets/sass.svg';
import img8 from '../assets/Ts.png';
import img9 from '../assets/bootstrap.svg';
import img11 from '../assets/tailwind.svg';
import img12 from '../assets/new-php-logo.svg';
import img13 from '../assets/flutter.svg';
import img14 from '../assets/icon_dart.svg';
import img15 from '../assets/Next.svg';

import { motion } from "framer-motion";


export const Skills = () => {
  return (
    <div id='skills'>
        <h1 style={{border:"5px solid black", margin: '40px auto 20px', padding:" 5px", textAlign:'center', width: '250px'}}>Skills</h1>
        <h2>
            <motion.Container 
                initial={{  opacity: 0, y:-50 }} 
        whileInView={{opacity:1, y:0}}
        transition={{duration:3, ease:'easeOut', delay:0.5}}
            >
                 Using Now:
            <Container >
                <Row className='mt-4'>
                    <Col className='text-center'>
                        <img src={img1} alt="" />
                        <h4 className='mt-2'>Git</h4>
                    </Col>
                    <Col className='text-center'>
                        <img src={img2} alt="" />
                        <h4 className='mt-2'>HTML</h4>
                    </Col>
                    <Col className='text-center'>
                        <img src={img3} alt="" />
                        <h4 className='mt-2'>CSS</h4>
                    </Col>
                    <Col className='text-center'>
                        <img src={img4} alt="" />
                        <h4 className='mt-2'>Figma</h4>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col className='text-center'>
                        <img src={img5} alt="" />
                        <h4 className='mt-2'>JavaScript</h4>
                    </Col>
                    <Col className='text-center'>
                        <img src={img6} alt="" />
                        <h4 className='mt-2'>React</h4>
                    </Col>
                    <Col className='text-center'>
                        <img src={img7} alt="" />
                        <h4 className='mt-2'>Sass</h4>
                    </Col>
                    <Col className='text-center'>
                        <img src={img9} alt="" />
                        <h4 className='mt-2'>Bootstrap</h4>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col className='text-center'>
                        <img style={{width: '120px'}} src={img11} alt="" />
                        <h4 className='mt-2'>Tailwind CSS </h4>
                    </Col>
                    <Col className='text-center'>
                        <img style={{width: '70px'}} src={img13} alt="" />
                        <h4 className='mt-2'>Flutter</h4>
                    </Col>
                    <Col className='text-center'>
                        <img style={{width: '80px'}} src={img14} alt="" />
                        <h4 className='mt-2'>Dart</h4>
                    </Col>
                </Row>
            </Container>
            <Container>
                Learning:
                    <Row className='mt-4'>
                    <Col className='text-center'>
                        <img style={{width: '120px'}} src={img8} alt="" />
                        <h4 className='mt-2'>TypeScript</h4>
                    </Col>
                    
                    <Col className='text-center'>
                        <img style={{width: '150px'}} src={img12} alt="" />
                        <h4 className='mt-2'>php</h4>
                    </Col>
                    <Col className='text-center'>
                        <img style={{width: '120px'}} src={img15} alt="" />
                        <h4 className='mt-2'>Next js</h4>
                    </Col>
                </Row>
            </Container>
            </motion.Container>
           
        </h2>
    </div>
  )
}
