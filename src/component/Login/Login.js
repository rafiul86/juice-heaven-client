import React, { useContext, useState } from "react";
import firebaseConfig from "../Fire-Auth/firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import { Button } from "@material-ui/core";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const provider = new firebase.auth.GoogleAuthProvider();
  const [user, setUser] = useState([]);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        setLoggedInUser(newUser);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Button onClick={handleSignIn} variant="contained" color="secondary">
        Sign In using Google{" "}
      </Button>
    </div>
  );
};

export default Login;
