// import React, { useEffect, useState } from 'react'
// import { useAppContext } from '../../utils/AppContext'
import { Button, ButtonGroup, Col, Container, Image, Row } from 'react-bootstrap';
import "./style.css"
import PageTitle from '../../components/PageTitle'

import ProfilePic from '../../Assets/ProfilePic.jpg'
import Resume from '../../Assets/Grant Cawley - Resume.pdf'

const AboutPage = () => {
    return (
            <Container>
            <PageTitle title="About Me" subtitle=""></PageTitle>
                <Row>
                    <Col sm={7} md={5} lg={4} >
                        <Row>
                            <Image src={ProfilePic} alt="Grant Cawley" />
                        </Row>
                        <Row>
                            <ButtonGroup>
                                <Button size="sm" href="https://www.linkedin.com/in/grant-cawley-89249415b" variant="danger">Linkedin</Button>
                                <Button size="sm" href="https://github.com/cawleygl" variant="danger">GitHub</Button>
                                <Button size="sm" href="mailto:grantlcawley@gmail.com" variant="danger">Email</Button>
                                <Button size="sm" href={Resume} download variant="danger">Resume</Button>
                            </ButtonGroup>
                        </Row>
                    </Col>
                    <Col className="about">
                        <p>Grant Cawley is a student currently learning full stack software development through Washington
                        University Coding Boot Camp. He graduated from Saint Louis University in the Spring of 2018 with a
                        Bachelor of Science degree in Psychology, and Bachelor of Arts degree in Spanish Language and
                        Literature. He is currently located in Saint Louis, Missouri, and has completed a number of coding
                        projects through the Washington University Coding Boot Camp program. Grant was most recently
                        employed by Varsity Tutors in Saint Louis as a Tutor Engagement Specialist, a customer service role
                        working closely with contracted tutors and clients.</p>
                    </Col>
                </Row>
            </Container>
    )
}

export default AboutPage
