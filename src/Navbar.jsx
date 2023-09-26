import React from 'react'
import { NavLink } from 'react-router-dom'


const  Navbar =() =>{
  return (
 <>
 <div className="container-fluid">
<div className="row">
    <div className="col-lg-10 mx-auto">
    <ul className='d-flex' style={{listStyle:"none",display:"inline-block",}}>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/blog">Blog</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
   </ul>

    </div>
</div>


 </div>
  
 </>
  )
}

export default Navbar