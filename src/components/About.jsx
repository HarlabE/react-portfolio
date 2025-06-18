import React from 'react'
import img1 from '../assets/separatorBlack 1.png'
import { Col, Container, Row } from 'react-bootstrap'

export const About = () => {
  return (
    <div id='about' className='mt-5'>
        <h1 style={{border:"5px solid black", margin: '40px auto 20px', padding:" 5px", textAlign:'center', width: '250px'}}>About Me</h1>
        <p className='my-5 txt' style={{textAlign:'center', paddingInline: '10%', color: '#0F172A'}}>
            I am a software developer committed to addressing real-world challenges through my technical expertise. My core competencies include developing scalable websites and web applications, effective team collaboration, and strong public speaking skills.
        </p>

        <h4 className='my-5' style={{borderInline:"3px solid #1A1515", margin: '100px auto 20px', padding:" 5px", textAlign:'center', width: '200px'}} >
            Explore
        </h4>
        <div className='text-center '>
            <img className='my-5' src={img1} alt="" />
        </div>
        <Container>
            <Row>
                <Col xs={12} md={6} className='text-center text-lg-start'>
                <h2>Design</h2>
                <p className='txt'>
                    I am capable of designing the website, web applications and mobile applications according to your specific requirements and preferences. Additionally, I can create the site from the ground up and provide ongoing consultations throughout the development process.
                </p>
                </Col>
                <Col xs={12} md={6} className='text-center text-lg-start'>
                     <h2>Development</h2>
                <p className='txt'>
                    I have the expertise to develop design prototypes, such as Figma designs, and implement them to create dynamic and fully responsive websites across all devices.
                </p>
                </Col>
            </Row>
            <Row xs={12} className='text-center my-5 ' >
                <h2>Maintenance</h2>
                <p className='text-center mx-auto txt' style={{width: '500px'}}>
                    My expertise lies in maintaining websites, web applications and mobile applications, upgrading user interfaces, and implementing UI fixes to enhance functionality and user experience.
                </p>
            </Row>
        </Container>
        
         <div className='text-center '>
            <img className='my-5' src={img1} alt="" />
        </div>

    </div>
  )
}
