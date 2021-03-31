import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 300,
    },
    color : {
      primary : 'red'
    }
  });
const Product = ({product}) => {
    const {name, _id , price, imageURL} = product;
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageURL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="medium" variant="contained" color="primary">Price</Button>
      <IconButton aria-label="price">
      <AttachMoneyIcon />{price} 
        </IconButton>
        <Button size="small" variant="contained" color="inherit">
        <Link to={`/orders/${_id}`}>Order Now</Link>
        </Button>
      </CardActions>
    </Card>
        </div>
    );
};

export default Product;