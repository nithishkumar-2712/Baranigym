import React from 'react'
// import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './Navebar.css'
 function Navebar() {
  return (
    <> <nav className="navbar bg-success container">
    <div className="container">
        <a className="navbar-brand" href="#">
            {/* <img src="#" alt="Barani Cake Shop" width="100" height="80" /> */}
        </a>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Bungee+Shade&family=Emblema+One&family=Honk&family=Lilita+One&family=Lobster&family=Roboto:ital,wght@0,100..900;1,100..900&family=Spicy+Rice&display=swap');
</style>

        {/* <h1 className="h1">BARANI CAKE SHOP</h1> */}
        <ul className='ul d-flex ' >
            <li className="nav-item"><Link className='text-darkk ' to="/">Home</Link></li>
            <li className="nav-item"><Link className='text-darkk ' to="/Addtocart">Addtocart</Link></li>
            <li className="nav-item"><Link className='text-darkk ' to="/Order">Order</Link></li>
            {/* <li className="nav-item"><Link className='text-dark m-5' to="/Register">Register</Link></li> */}
            <li className="nav-item"><Link className='text-darkk ' to="/login">login</Link></li>
        </ul>
        <input placeholder='seacher' className="form-control-lg" />
        <button className="btn bg-dark text-light" >seacher</button>
    </div>
</nav>
      
    </>
  )
}
export default Navebar