import React, { useState } from 'react'


const mockRequests = [
{id: 'r1', produceType: 'Tomato', qty: 2000, pickup: 'Village A'},
{id: 'r2', produceType: 'Mango', qty: 1500, pickup: 'Village B'}
]
const Transportrequestcard = () => {
    const [transportrequest]=useState(mockRequests);

  return (
   <>
    <div>transport request card</div>
    <ul>
        {transportrequest.map((t)=>(
            <li key={t.id}>
                <h3>{t.produceType}</h3>
                 <h3>{t.pickup}</h3>
                 <h3>{t.qty}kg</h3>
                 <button>Accept ride</button>
            </li>
        ))}

    </ul>
   </>
  )
}

export default Transportrequestcard