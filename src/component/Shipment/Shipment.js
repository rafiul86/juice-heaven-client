import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import TableData from "./Table/TableData";

const Shipment = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch(
      "https://peaceful-crag-13613.herokuapp.com/orderHistory?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      {orders.map((order) => (
        <TableData order={order}> </TableData>
      ))}
    </div>
  );
};

export default Shipment;
