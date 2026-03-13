import React, { useState } from "react";

function TotalPrice() {
  const [orderId, setOrderId] = useState("");
  const [total, setTotal] = useState(null);

  const fetchTotal = async () => {
    const response = await fetch(`http://localhost:9090/orders/${orderId}/total`);
    const data = await response.json();
    setTotal(data);
  };

  return (
    <div>
      <h2>Calculate Total Price</h2>
      <input
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button onClick={fetchTotal}>Get Total</button>
      {total !== null && <p>Total Price: {total}</p>}
    </div>
  );
}

export default TotalPrice;