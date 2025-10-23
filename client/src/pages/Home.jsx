import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>welcome to farmer home</h1>    
    <div className="shortdec">
        <p>fast transport and right market=better price at market</p>
        <Link to={"/farmerdashbroad"}>farmer dashbroad</Link>
        <br />
        <Link to={"/transportdashbroad"}>transportdashbroad</Link>
        <br />
        <Link to={"/buyerdashbroad"}>buyerdashbroad</Link>
    </div>
    </>
  )
}

export default Home