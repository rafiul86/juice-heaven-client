import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Container } from "@material-ui/core";

const Admin = () => {
  return (
    <Container>
      <Button className="position" color="primary" variant="contained">
        <Link to="/addproducts">Add Products</Link>
      </Button>
      <br />
      <Button className="position" color="secondary" variant="contained">
        <Link to="/deleteproducts">Manage Products</Link>
      </Button>
    </Container>
  );
};

export default Admin;
