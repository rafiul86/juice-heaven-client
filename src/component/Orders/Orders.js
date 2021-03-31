import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Orders = () => {
    const [loggedInUser ,setLoggedInUser] = useContext(UserContext);

    const {id}= useParams()
    const [item, setItem] = useState({})
    useEffect(()=>{
        fetch(`https://peaceful-crag-13613.herokuapp.com/findProduct/`+id)
        .then(res => res.json())
        .then(data =>setItem(data))
    },[id])
    const handleOrder = () =>{
        const orderDetails = { 
            clientName : loggedInUser.displayName ,
            email : loggedInUser.email,
            date : new Date(),
            product : item.name,
            price : item.price,
        }
        fetch('https://peaceful-crag-13613.herokuapp.com/orderDetails',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
        console.log('order submitted')
        })
    }
    return (
        <div>
         <img style={{width : '300px' , borderRadius : '60px'}} src={item.imageURL} alt=""/>
            <h4>Name : {item.name}  <span> Price : {item.price}</span> </h4>  
            <Button variant="contained" color="primary" onClick={handleOrder}><Link to="/shipment">Checkout</Link></Button> 
            
        </div>
    );
};

export default Orders;