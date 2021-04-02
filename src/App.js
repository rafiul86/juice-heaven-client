import React, { createContext, useState } from "react";
import { BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import './App.css';
import Admin from "./component/Admin/Admin";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Orders from "./component/Orders/Orders";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import { Container } from '@material-ui/core';
import Shipment from "./component/Shipment/Shipment";
import AddProducts from "./component/Admin/AddProducts/AddProducts";
import DeleteProducts from "./component/DeleteProducts/DeleteProducts";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


      export  const UserContext = createContext()

function App() {
  const classes = useStyles();
      const [loggedInUser ,setLoggedInUser] = useState({})
  return (

    <UserContext.Provider value = {[loggedInUser ,setLoggedInUser]}>
      <Container>
      <Router>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
           HILL-VIEW-MART
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link className="navigation" to="/home">Home</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link className="navigation" to="/shipment">Orders</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link className="navigation" to="/admin">Admin</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link className="navigation" to="/login">Login</Link>
          </Typography>
          <img src={loggedInUser.photoURL} alt=""/>
        </Toolbar>
      </AppBar>
    </div>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link class="navigation" to="/home">Home</Link>
            </li>
            <li>
              <Link class="navigation" to="/shipment">Orders</Link>
            </li>
            <li>
              <Link class="navigation" to="/admin">Admin</Link>
            </li>
            <li>
              <Link class="navigation" to="/login">Login</Link>
            </li>
          </ul>
        </nav> */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/shipment">
          <Shipment />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/orders/:id">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/addproducts">
            <AddProducts />
          </PrivateRoute>
          <PrivateRoute path="/deleteproducts">
            <DeleteProducts />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </Container>
    </UserContext.Provider>
  );
}

export default App;
