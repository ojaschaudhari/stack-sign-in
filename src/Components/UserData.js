import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../Design/UserForm.css'

export default function UserData() {
    
    return (
        <>
            <Container>
                <Row>
                    <h1 className='display-1 h1 my-5 heading'>Submitted Form Details</h1>
                </Row>

                <Row className='my-4'>
                    <label>Name :- {sessionStorage.getItem("username")}</label>
                </Row>

                <Row className='my-4'>
                    <label>Date Of Birth :- {sessionStorage.getItem("date")}</label>
                </Row>

                <Row className='my-4'>
                    <label>Email :- {sessionStorage.getItem("email")}</label>
                </Row>

                <Row className='my-4'>
                    <label>Mobile Number :- {sessionStorage.getItem("mobileno")}</label>
                </Row>

                <Row>
                    <label> Email sent to yout email-id...</label>
                </Row>
            </Container>
        </>
    )
}
