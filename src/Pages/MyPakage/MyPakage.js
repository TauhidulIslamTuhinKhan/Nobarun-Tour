


import { useEffect, useState } from 'react';



import './MyPakage.css';

const MyPakage = () => {  
   
    const [users, setUsers] = useState([]);
    // const [users, setUsers] = useState([]);
    

    useEffect( ()=> {        
        fetch('https://wicked-blood-41231.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    } ,[])

    const handleRemove = id => {
       const proceed = window.confirm('Are you sure, you want to Remove this?');
       if(proceed){
            const url =`https://wicked-blood-41231.herokuapp.com/users/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                const remaining = users.filter(user => user._id !== id);
                setUsers(remaining);                
            }
        })
       }
    }

   
    return (
        <div className="container my-5">
           <div className="row">
               {
                   users.map(user => <div 
                    key={user._id}>
                        <h3>Location Name : {user?.location}</h3>
                    <h3>User Name : {user?.name}</h3>
                    <button onClick={()=> handleRemove(user._id)} className="btn btn-primary">Remove</button>
                    </div>)
               }
                
                           
           </div>
            
        </div>
    );
};

export default MyPakage;