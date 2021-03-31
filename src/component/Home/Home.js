import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Home = () => {
    const [products ,setProducts] = useState([])

    useEffect(()=>{
        fetch('https://peaceful-crag-13613.herokuapp.com/showProduct')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div>
         <Grid container spacing={8} >
               {
                    products.map(product=><Grid item X={12} md={6} lg={4} xlg={3}><Product key={product._id} product={product}></Product></Grid>)
              }    
        </Grid> 
        </div>
    );
};

export default Home;