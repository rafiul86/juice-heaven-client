import React, { useEffect, useState } from 'react';

const Shipment = () => {
    const [orders , setOrders] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5501/orderHistory')
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

export default Shipment;