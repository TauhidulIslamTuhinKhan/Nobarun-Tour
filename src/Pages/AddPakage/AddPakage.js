import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPakage.css'

const AddPakage = () => {const { register, handleSubmit, reset } = useForm();
const onSubmit = data => {
    axios.post('https://wicked-blood-41231.herokuapp.com/pakages', data)
    .then(res => {
        if(res.data.insertedId){
           alert('Added Successfully');
           reset();
        }
        console.log(data);
    })
}
    return (
        <div className="add-service">            
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("country", { required: true, maxLength: 20 })} placeholder="Country" />            
            <input {...register("location", { required: true, maxLength: 20 })} placeholder="Location" />            
            <input type="number" {...register("price")} placeholder="Cost" />
            <input {...register("img")} placeholder="Image url" />
            <textarea {...register("description")} placeholder="description" />
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddPakage;