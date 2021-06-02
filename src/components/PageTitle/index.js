import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap';

const pageTitle = (props) => {
    return (
        <Jumbotron>
            <Container>
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </Container>
        </Jumbotron>

    );
}

export default pageTitle
