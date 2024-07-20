import React from 'react';
import logo from '../Landing-Page/media/imgaes/logo.svg';
import './home/Home.css'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <> 
     <div className="container">
     <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className ="container p-2">
          <Link className ="navbar-brand" to="/"> <img src={logo} alt="logo" style={{width:"25%"}}/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className ="collapse navbar-collapse" id="navbarSupportedContent">
         
            <form className ="d-flex">
            <ul className ="navbar-nav  mb-lg-0">
              <li className ="nav-item">
                <Link className ="nav-link active text-muted fs-8" aria-current="page" to="/signup">Signup</Link>
              </li>
              <li className ="nav-item">     
                <Link className ="nav-link active text-muted fs-8" to="/about">About</Link>
              </li>
              <li className ="nav-item">
                <Link className ="nav-link active text-muted fs-8" to="/product ">Products</Link>
              </li>
              <li className ="nav-item">
                <Link className ="nav-link active text-muted fs-8" to="/pricing">Pricing</Link>
              </li>
              <li className ="nav-item">
                <Link className ="nav-link active text-muted fs-8" to="/support">Support </Link>
              </li>
             
            </ul>
              
            </form>
          </div>
        </div>
      </nav>
     </div>
     </>
     );
}

export default Navbar;
    













