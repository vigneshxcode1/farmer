import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import{BrowserRouter,Routes,Route,Link}from 'react-router-dom'
import Farmerdashbroad from './pages/dashbroad/Farmerdashbroad'
import Transport from './pages/dashbroad/Transport'
import Productcard from './pages/components/Productcard'
import Transportrequestcard from './pages/dashbroad/Transportrequestcard'
import Createdemand from './pages/components/Createdemand'
import Viewproducts from './pages/components/Viewproducts'
import Buyersdashbroad from './pages/dashbroad/Buyersdashbroad'
import ViewProductcard from './pages/components/Viewproductcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/farmerdashbroad' element={<Farmerdashbroad/>}/>
      <Route path='/transportdashbroad' element={<Transportrequestcard/>}/>
       <Route path='/transporter' element={<Transport/>}/>
      <Route path='/productcard'element={<Productcard/>}/>
      <Route path='/createdemand' element={<Createdemand/>}/>
      <Route path='/viewproduces' element={<Viewproducts/>}/>
      <Route path='/viewproductcard' element={<ViewProductcard/>}/>
      <Route path='/buyerdashbroad' element={<Buyersdashbroad/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
