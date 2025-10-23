import React from "react";

const ViewProductCard = ({ product}) => {
 
  return (
  
<>
        <h3>ID: {product.id}</h3>
          <p>Type: {product.type}</p>
          <p>Name: {product.name}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Status: {product.status}</p>
          <button className="bg-green-600 text-white px-3 py-1 mt-2 rounded hover:bg-green-700">
            BUYS Request
          </button>

</>
          
    

  );
};

export default ViewProductCard;
