import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

const navbar = () => {
    return (
        <>
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/'>About</Nav.Link>
                        <Nav.Link href='/contact'>Contact</Nav.Link>
                        <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    
        );
}

export default navbar
