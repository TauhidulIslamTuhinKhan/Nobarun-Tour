import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Pakage from '../Pakage/Pakage';

const Pakages = () => {
    const [pakages, setPakages] = useState([]);

    useEffect( ()=> {
        fetch('/pakage.json')
        .then(res => res.json())
        .then(data => setPakages(data))
    } ,[])
    return (
        <div className="container my-5">
            <h2>Our Most Popular and Excited Destination</h2>
            <div className="row">
                {
                    pakages.map(pakage=> <Pakage
                    key={pakage.key}
                    pakage={pakage}    
                    ></Pakage>)
                }
            </div>
        </div>
    );
};

export default Pakages;


                    