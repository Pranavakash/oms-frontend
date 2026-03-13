import React from "react";
import CreateOrder from "./CreateOrder";
import OrderHistory from "./OrderHistory";
import UpdateOrder from "./UpdateOrder";
import CancelOrder from "./CancelOrder";
import TotalPrice from "./TotalPrice";

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
      {/* Page Title */}
      <h1 className="text-center text-white bg-primary p-3 rounded shadow mb-4 w-75">
       Order Management System 
      </h1>

      {/* Centered Cards */}
      <div className="w-75 mb-3">
        <CreateOrder />
      </div>
      <div className="w-75 mb-3">
        <OrderHistory />
      </div>
      <div className="w-75 mb-3">
        <UpdateOrder />
      </div>
      <div className="w-75 mb-3">
        <CancelOrder />
      </div>
      <div className="w-75 mb-3">
        <TotalPrice />
      </div>
    </div>
  );
}

export default App;
