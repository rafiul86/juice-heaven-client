import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Orders = () => {
    const {id}= useParams()
    const [item, setItem] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5501/findProduct/`+id)
        .then(res => res.json())
        .then(data =>setItem(data))
    },[])
    return (
        <div>
            <h4>Name : {item.name}  <span> Price : {item.price}</span> </h4>   
        </div>
    );
};

export default Orders;