
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'


const Booking = () => {
    const {pakageID} = useParams();
    const [pakage, setPakage] = useState({});

    useEffect( ()=> {
        fetch(`http://localhost:5000/pakages/${pakageID}`)
        .then(res => res.json())
        .then(data => setPakage(data))
    } ,[])
    return (
        <div className="container my-5">            
            <div className="row">
                <div className="col-lg-6">
                    <h4>Here is the Details info of your Dream Destination</h4>
                    <img className="img-fluid" src={pakage?.img} alt="" />
                    <h3>NAME OF CITY : {pakage?.location}</h3>
                    <h4>NAME OF COUNTRY : {pakage?.country} </h4>
                    <h4>COST PER NIGHT : ${pakage?.price}</h4>
                    <button className="btn btn-primary">Booking for {pakage?.location}</button>
                </div>
                <div className="col-lg-6">
                    
                </div>
            </div>
        </div>
    );
};

export default Booking;