import React, { useState } from "react";

function UpdateOrder() {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");

  const updateStatus = async () => {
    const response = await fetch(`http://localhost:9090/orders/${orderId}/status?status=${status}`, {
      method: "PUT"
    });
    const data = await response.json();
    alert("Order updated: " + JSON.stringify(data));
  };

  return (
    <div>
      <h2>Update Order Status</h2>
      <input
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <input
        placeholder="New Status (CREATED/SHIPPED/CANCELLED)"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button onClick={updateStatus}>Update</button>
    </div>
  );
}

export default UpdateOrder;