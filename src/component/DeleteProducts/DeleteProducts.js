import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { DeleteOutline, PausePresentationRounded } from "@material-ui/icons";
const DeleteProducts = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch("https://peaceful-crag-13613.herokuapp.com/showProduct")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDelete = (id) => {
    fetch(`https://peaceful-crag-13613.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("One item deleted");
        }
      });
  };
  return (
    <div>
      {orders.map((order) => (
        <li>
          Product : {order.name} , Price : {order.price}
          <Button
            onClick={() => handleDelete(order._id)}
            color="secondary"
            variant="contained"
          >
            <DeleteForeverIcon />
          </Button>{" "}
        </li>
      ))}
    </div>
  );
};

export default DeleteProducts;
