import React, { useState } from "react";

function OrderHistory() {
  const [customerName, setCustomerName] = useState("");
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await fetch(`http://localhost:9090/orders/history/${customerName}`);
    const data = await response.json();
    setOrders(data);
  };

  return (
    <div>
      <h2>Order History</h2>
      <input
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <button onClick={fetchOrders}>Fetch Orders</button>
      <ul>
        {orders.map((o) => (
          <li key={o.id}>
            {o.productName} - {o.status} - Total: {o.quantity * o.pricePerUnit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderHistory;