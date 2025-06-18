import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import img1 from '../assets/separatorBlack 1.png'
import FormInput from './FormInput';
import emailjs from "emailjs-com";
// import axios from 'axios';
export const Contact = () => {
        

    
    
    
      
    const handleSubmit = async (e) => {
      e.preventDefault();
        emailjs.sendForm(
        "service_lx37yyj",
        "template_845q205",
        e.target,
        "0zIsRPzTkKtSsxDBU"
    ).then((result) => {
        alert("Message sent!", result.text);
        e.target.reset();
    }).catch((error) => {
        alert("Error:", error.text);
    });
    
       return;
    };
  return (
    <div id='contact'>
        <h1 style={{border:"5px solid black", margin: '40px auto 20px', padding:" 5px", textAlign:'center', width: '250px'}}>Contact</h1>
            <h5 className='text-center my-5'>
                Reach out to me for any software development job by sending a mail or filling the form below
            </h5>

        

        <div className='text-center '>
            <img className='my-5' src={img1} alt="" />
        </div>
        
      
     
         <main>
        
        
        <div className=' p-lg-5'>
        <Container className='ms-lg-5 fs-change '>
          <Row className='align-items-center'>
            <Col md={6} xs={12} className='text-center'>
              <div className='mb-5'>
      <h2 className='text-center'>Reach Out</h2>
      
        <form onSubmit={handleSubmit} className='contact-form'>
            <div >
            <FormInput type="text" name="user_name"  placeholder="username"  /> 
            </div>
             
             <FormInput placeholder="email" type="text" name="user_email" />
            
            
           
            <div className='full-width'>
            <FormInput placeholder="subject" type="text" name="subject" />
            </div>
            <div className='full-width'>
            <FormInput  placeholder="message" type="text" name="message" />
            </div>
            <input className='btn btn-outline-dark submit-btn' type="submit" value="Submit"  />
        </form>
    </div>
            </Col>
            <Col md={6} xs={12} >
            <Row className='text-center text-md-start'>
          

          

          <h4> <FontAwesomeIcon icon={faPhone} style={{ color: "#0f172a", width: "2em" }} />Phone</h4>
          <p className='inv-text abt fs-change'><a style={{textDecoration: 'none', color:'black'}} href="tel:+2348125689056">(+234) 8125689056</a></p>
          
        
        <br />
          <br />
          
        
          
          
          <h4><FontAwesomeIcon icon={faEnvelope} style={{ color: "#0f172a", width: "2em" }} /> Email</h4>
          <p className='inv-text abt fs-change'><a style={{textDecoration: 'none', color:'black'}} href="mailto:olagunjuayodeleganiyu@gmail.com">olagunjuayodeleganiyu@gmail.com</a></p>
          
          <br />
          <br />
          
          
            
        </Row>
            </Col>
          </Row>
        
      </Container>
      </div>
      </main>
    
    </div>
  )
}



