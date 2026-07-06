import React from "react";
import { useState, useEffect, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


const Forms = () =>{

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        phone:''
    });

    const [students, setStudents] = useState([])


    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const phoneRef = useRef()


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    // controll from submit form

    const handleControlledSubmit = (e) => {
        e.preventDefault()

        setStudents([...students, formData])

        setFormData({
            name:'',
            email:'',
            password:'',
            phone:''
        })

    }

    // Uncontrolled Form Submit

    const handleUnControlledSubmit = (e) => {
        e.preventDefault()
        
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            phone: phoneRef.current.value
        }

        setStudents([...students, data])

        nameRef.current.value = ''
        emailRef.current.value = ''
        passwordRef.current.value = ''
        phoneRef.current.value = ''
    

    }

    return(

        <>

        <div  className='container mx-auto'>
        
        <h1 className='text-center'>
            React Form using controlled and Uncontrolled
        </h1>

        <Row>
             <Col>
                    <Form onSubmit={handleControlledSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="name" name='name' value={formData.name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' value={formData.email} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' value={formData.password} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" placeholder="phone" name='phone' value={formData.phone} onChange={handleChange} />
                        </Form.Group>
                        <button type="submit">
                            Submit Controlled Form
                        </button>
                    </Form>
                </Col>
                <Col>
                    <Form onSubmit={handleUnControlledSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="name" name='name' ref={nameRef}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' ref={emailRef}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' ref={passwordRef}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" placeholder="phone" name='phone' ref={phoneRef}/>
                        </Form.Group>
                        <button type="submit">
                            Submit uncontrolled Form
                        </button>
                    </Form>
                </Col>
            
        </Row>

        </div>
        
        </>
    )

}





export default Forms;
