import React from 'react'

const Productcard = ({product}) => {
  return (
   <>
     <h3>{product.id}</h3>
     <h3>{product.type}</h3>
      <h3>{product.name}</h3>
       <h3>{product.quantity}</h3>
        <h3>{product.status}</h3>
        <button>create Transport request</button>

   </>
  )
}

export default Productcard