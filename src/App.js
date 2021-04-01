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

      export  const UserContext = createContext()

function App() {
      const [loggedInUser ,setLoggedInUser] = useState({})
  return (

    <UserContext.Provider value = {[loggedInUser ,setLoggedInUser]}>
      <Container>
      {/* <h1>{loggedInUser.displayName}</h1>
      <img src={loggedInUser.photoURL} alt=""/> */}
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/shipment">Orders</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
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
