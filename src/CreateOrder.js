import React, { useState } from "react";
import { createOrder } from "./api";

function CreateOrder() {
  const [order, setOrder] = useState({
    customerName: "",
    productName: "",
    quantity: 1,
    pricePerUnit: 0,
    status: "CREATED"
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const data = await createOrder(order);
    alert("Order created with ID: " + data.id);
  };

  return (
    <div>
      <h2>Create Order</h2>
      <input name="customerName" placeholder="Customer Name" onChange={handleChange} />
      <input name="productName" placeholder="Product Name" onChange={handleChange} />
      <input name="quantity" type="number" onChange={handleChange} />
      <input name="pricePerUnit" type="number" onChange={handleChange} />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
}

export default CreateOrder;
