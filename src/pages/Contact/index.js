// import React, { useEffect, useState } from 'react'
// import { useAppContext } from '../../utils/AppContext'
import "./style.css"
import PageTitle from '../../components/PageTitle'
import { Button, ButtonGroup, Container, Form, Row, } from "react-bootstrap"

import Resume from '../../Assets/Grant Cawley - Resume.pdf'

const ContactPage = () => {
    return (
        <Container>
            <PageTitle title="Contact" subtitle="Submit your contact info here or get in touch with me directly below"></PageTitle>
            <Row className="form">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.Message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </Row>
            <Row>
                <ButtonGroup>
                    <Button size="sm" href="https://www.linkedin.com/in/grant-cawley-89249415b" variant="danger">Linkedin</Button>
                    <Button size="sm" href="https://github.com/cawleygl" variant="danger">GitHub</Button>
                    <Button size="sm" href="mailto:grantlcawley@gmail.com" variant="danger">Email</Button>
                    <Button size="sm" href={Resume} download variant="danger">Resume</Button>
                </ButtonGroup>

            </Row>
        </Container>
    )
}

export default ContactPage
