import React from 'react'
import { Card, Button } from 'react-bootstrap';

const card = (props) => {
    return (
        <>
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.asset} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                    <Button size="sm" href={props.appLink} variant="danger">Application</Button>
                    <Button size="sm" href={props.repoLink} variant="danger">Repository</Button>
                </Card.Body>
        </Card>        
        </>

    );
}

export default card
