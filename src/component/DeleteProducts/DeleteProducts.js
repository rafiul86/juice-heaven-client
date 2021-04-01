import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const DeleteProducts = () => {
    const [orders , setOrders] = useState([]);
    const [loggedInUser ,setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch('https://peaceful-crag-13613.herokuapp.com/orderHistory?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data => setOrders(data))
    },[])
    return (
            <div>
            {
                orders.map(order => <li>{order.email}  {order.date}  {order.product}  {order.names} </li>)
            }
        </div>
    );
};

export default DeleteProducts;