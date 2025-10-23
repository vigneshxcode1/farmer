import React, { useState } from "react";

import ViewProductcard from "./Viewproductcard";
const sampleproducts=[
    {id:101,type:'vegitable',name:'onion',quantity:"500kg",status:"avai"},
    {id:201,type:'fruite',name:'apple',quantity:"1200kg",status:"not avai"},
    {id:303,type:'grains',name:'red rice',quantity:"1500kg",status:"avai"}
]

const ViewProducts = () => {
 const [products]=useState(sampleproducts);
  return (
    <div className="grid gap-4 md:grid-cols-2">
        <h1>Buyer view </h1>
       <div className="productcards">
        {products.map(p=><ViewProductcard key={p.id} product={p}/>)}
    </div>
    </div>
  );
};

export default ViewProducts;
