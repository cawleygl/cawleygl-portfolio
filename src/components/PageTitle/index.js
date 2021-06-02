import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap';

import "./style.css"

const pageTitle = (props) => {
    return (
        <Jumbotron class="jumbotron">
            <Container>
                <h1 class="title">{props.title}</h1>
                <p>{props.subtitle}</p>
            </Container>
        </Jumbotron>

    );
}

export default pageTitle
