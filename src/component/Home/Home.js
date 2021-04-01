import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';



const Home = (props) => {
    const [products ,setProducts] = useState([])

    useEffect(()=>{
        fetch('https://peaceful-crag-13613.herokuapp.com/showProduct')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div>
            <Box  justifyContent="center" display="flex" p={1} bgcolor="background.paper">
            {
                products.length===0 && <CircularProgress alignItems="center" />
            }
      </Box>  
         <Grid container spacing={8} >
               {
                    products.map(product=><Grid item X={12} md={6} lg={4} xlg={3}><Product key={product._id} product={product}></Product></Grid>)
              }    
        </Grid> 
        </div>
    );
};

export default Home;