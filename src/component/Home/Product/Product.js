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



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
const Product = ({product}) => {
    const {name , price, imageURL} = product;
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageURL}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography gutterBottom variant="h5" component="h2">
      {price}
          </Typography>
        <Button size="small" variant="contained" color="primary">
        <Link to="/orders">Order Now</Link>
        </Button>
      </CardActions>
    </Card>
        </div>
    );
};

export default Product;