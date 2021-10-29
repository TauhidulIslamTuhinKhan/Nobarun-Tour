import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Pakage = (props) => {
    const {image, country, location} = props.pakage
    return (
        <div className="col-lg-3 my-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Text>{location}</Card.Text>
                    <Card.Title>{country}</Card.Title>
                    <Button variant="primary">Booked {location}</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Pakage;