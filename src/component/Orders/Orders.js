import { Button, Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const history = useHistory()
    const [loggedInUser ,setLoggedInUser] = useContext(UserContext);
    const {id}= useParams()
    console.log(id)
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
        alert('Order submitted successfully')
        })
        history.push('/shipment')
    }
    return (
        <div>
            <Grid container spacing={8}>
            <Grid item xs={12} lg={6}>
         <img style={{width : '300px' , borderRadius : '60px'}} src={item.imageURL} alt=""/>
            <h4>Name : {item.name}  <span> Price : {item.price}</span> </h4>  
            <Button variant="contained" color="primary" onClick={handleOrder}>  <FontAwesomeIcon icon={faShoppingCart} /> Checkout</Button> 
            </Grid>
            </Grid>
        </div>
    );
};

export default Orders;