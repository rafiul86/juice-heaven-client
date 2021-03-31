import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Orders = () => {
    const {id}= useParams()
    console.log(id)
    const [item, setItem] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5501/findProduct/${id}`)
        .then(res => res.json())
        .then(data =>setItem(data))
        console.log(item)
    },[])
    return (
        <div>
            <h1>orders{item.name} </h1>
        </div>
    );
};

export default Orders;