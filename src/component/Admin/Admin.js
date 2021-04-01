import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
          <Link to="/addproducts">Add Products</Link>
          <br/>
          <Link to="/deleteproducts">Manage Products</Link>
        </div>
    );
};

export default Admin;