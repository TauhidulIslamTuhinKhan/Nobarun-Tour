import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css'
import useAuth from '../../Hooks/useAuth';



const Booking = () => {
    const {user} = useAuth();
    const {pakageID} = useParams();
    const [pakages, setPakages] = useState({});

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://wicked-blood-41231.herokuapp.com/users', data)
        .then(res => {
        if(res.data.insertedId){
           alert('Added Successfully');
           reset();
        }
        
    })
    
    console.log(data);
    } 

    useEffect( ()=> {
        fetch(`https://wicked-blood-41231.herokuapp.com/pakages/${pakageID}`)
        .then(res => res.json())
        .then(data => setPakages(data))
    } ,[])

    // const handleBooking = (data) => {        
    
        
    //     console.log(data);
    // }



    return (
        <div className="container my-5 booking-page">          
            <div>        
                <h4>Here is the Details info of your Dream Destination</h4>
                <img className="img-fluid" src={pakages?.img} alt="" />
                <h3>NAME OF CITY : {pakages?.location}</h3>
                <h4>NAME OF COUNTRY : {pakages?.country} </h4>
                <h4>COST PER NIGHT : ${pakages?.price}</h4>
                <p> {pakages?.description} </p>  
                {/* <button  className="btn btn-primary">Book For {pakages?.location} </button>      */}
            </div>
            <div>
                <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>                        
                                             
                    <input defaultValue={user.displayName} {...register("name", { required: true })} />    
                    <input defaultValue={user.email} {...register("email", { required: true })} />  
                        {errors.email && <span className="error">Please input this field</span>} 
                        <input placeholder="Address" defaultValue="" {...register("address", { required: true })} /> 
                        {errors.address && <span className="error">Please input this field</span>}
                        <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                        {errors.city && <span className="error">Please input this field</span>}
                        <input placeholder="Country" defaultValue="" {...register("country", { required: true })} /> 
                        {errors.country && <span className="error">Please input this field</span>}
                        <input placeholder="Phone number" defaultValue="" {...register("phone", { required: true })} />  
                        {errors.phone && <span className="error">Please input this field</span>}       
                        <input placeholder="Date" defaultValue="" type="date" {...register("date", { required: true })} />  
                        {errors.date && <span className="error">Please input this field</span>} 
                        <input defaultValue={pakages?.location} {...register("location", { required: true })} />       
                        <input className="bg-primary" type="submit" value="Confirm Booking"/>
                </form>
            </div>       
        </div>
    );
};

export default Booking;