import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import '../Design/UserForm.css'
import emailjs from 'emailjs-com'

export default function UserForm() {
    const navigate = useNavigate()
    const [username, setusername] = useState("")
    const [date, setdate] = useState("")
    const [email, setemail] = useState("")
    const [mobileno, setmobileno] = useState("")

    const d = new Date()
    const today = (d.getFullYear() - 18) + '-' + parseInt(d.getMonth() + 1) + '-' + d.getDate()

    async function handleSubmit() {
        const pattern = /@gmail.com/
        console.log(!pattern.test(email));

        if (!username || !date || !email || !pattern.test(email)) {
            console.log("Fill Username");
        }
        else {
            const password = Date.now()
            const params = { username, date, email, mobileno, password }

            axios.post('http://localhost:8000/userform', {
                username, date, email, mobileno,
            }).then((res) => {
                if (res.status === 200) {

                    emailjs.send('gmail', 'template_kn30cok', params, 'user_5mcXrNYs7vhObBushgKZR'
                    ).then((response) => {
                        console.log('SUCCESS!', response.status, response.text);
                    }).catch((error) => {
                        console.log('FAILED...', error);
                    })

                    sessionStorage.setItem("username", username)
                    sessionStorage.setItem("date", date)
                    sessionStorage.setItem("email", email)
                    sessionStorage.setItem("mobileno", mobileno)
                    navigate('/userdata')
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }


    return (
        <>
            <Container>
                <Row>
                    <h1 className='display-1 h1 my-5 heading'>Sign Up</h1>
                </Row>

                <Row className='my-4'>
                    <Col lg={3} className='text-end'>
                        <label>Name :- </label>
                    </Col>
                    <Col lg={7} className='text-start'>
                        <input type="text" placeholder='Enter Your Name...'
                            value={username} onChange={(e) => setusername(e.target.value)}></input>
                    </Col>
                </Row>

                <Row className='my-4'>
                    <Col lg={3} className='text-end'>
                        <label>Date Of Birth :- </label>
                    </Col>
                    <Col lg={3} className='text-start'>
                        <input type="date" placeholder='Enter Your Date Of Birth...'
                            max={today}
                            value={date} onChange={(e) => setdate(e.target.value)}></input>
                    </Col>
                </Row>

                <Row className='my-4'>
                    <Col lg={3} className='text-end'>
                        <label>Email :- </label>
                    </Col>
                    <Col lg={7} className='text-start'>
                        <input type="email" placeholder='Enter Your Email...'
                            value={email} onChange={(e) => setemail(e.target.value)}></input>
                    </Col>
                </Row>

                <Row className='my-4'>
                    <Col lg={3} className='text-end'>
                        <label>Mobile Number :- </label>
                    </Col>
                    <Col lg={3} className='text-start'>
                        <input type="text" placeholder='Enter Your Mobile Number...'
                            value={mobileno} onChange={(e) => setmobileno(e.target.value)}></input>
                    </Col>
                </Row>

                <Row className='my-5 '>
                    <Col className='d-flex justify-content-center'>
                        <button className='btn-grad'
                            onClick={handleSubmit}> Submit </button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
