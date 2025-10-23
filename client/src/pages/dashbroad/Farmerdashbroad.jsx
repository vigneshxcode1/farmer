import React, { useState } from 'react'
import Productcard from '../components/Productcard';

const sampleproducts=[
    {id:101,type:'vegitable',name:'onion',quantity:"500kg",status:"avai"},
    {id:201,type:'fruite',name:'apple',quantity:"1200kg",status:"not avai"},
    {id:303,type:'grains',name:'red rice',quantity:"1500kg",status:"avai"}
]

const Farmerdashbroad = () => {
    const [products]=useState(sampleproducts);

  return (

    <div>
    <h1>create transport request</h1>
    <div className="productcards">
        {products.map(p=><Productcard key={p.id} product={p}/>)}
    </div>
 </div>

   
   
    
  )
}

export default Farmerdashbroad