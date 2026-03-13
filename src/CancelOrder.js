import React, { useState } from "react";

function CancelOrder() {
  const [orderId, setOrderId] = useState("");

  const cancelOrder = async () => {
    await fetch(`http://localhost:9090/orders/${orderId}/cancel`, {
      method: "DELETE"
    });
    alert("Order cancelled successfully!");
  };

  return (
    <div>
      <h2>Cancel Order</h2>
      <input
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button onClick={cancelOrder}>Cancel</button>
    </div>
  );
}

export default CancelOrder;