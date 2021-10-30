import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pakage = (props) => {
    const {_id, img, country, location} = props.pakage
    return (
        <div className="col-lg-3 my-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Text>{location}</Card.Text>
                    <Card.Title>{country}</Card.Title>
                    <Link to={`/booking/${_id}`}><Button variant="primary">Booked {location}</Button></Link>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default Pakage;