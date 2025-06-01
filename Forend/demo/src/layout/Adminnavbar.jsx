import React from 'react'
import { Link, useNavigate } from "react-router-dom"
 function Adminnavbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <h3 className='font-family font-weight text-success'> Barani T-shirt & Shirt</h3>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      {/* <a className="navbar-brand" href="#">Hidden brand</a> */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='text-darkk ' to="/Admin">Admin</Link>
        </li>
        <li className="nav-item">
         <Link className='text-darkk ' to="/Orderr">login</Link>
        </li>
        <li className="nav-item">
          <Link className='text-darkk ' to="/Addtocartt">Addtoprodect</Link>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      
    </>
  )
}
export default Adminnavbar