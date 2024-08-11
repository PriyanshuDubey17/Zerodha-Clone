import React from 'react';
import logo from '../Landing-Page/media/imgaes/logo.svg';
import './home/Home.css'

function supportFooter() {
    return ( 
        <><footer style={{backgroundColor:"#FBFBFB"}}>
        <div className="container p-5 border-top mt-5">
            <div className="row ">
                <div className="col-3">
                <img src={logo} alt="logo" style={{width:"50%"}}/>
                <p className='p-2 mt-3 text-muted ' style={{ fontSize:"13px"}}>&copy;2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>
                <div  className='fs-5 '> 
                <a href='' className='mx-2'><i className="fa-brands fa-twitter text-muted"></i></a>
                <a href=''className='mx-2 '> <i className="fa-brands fa-facebook text-muted"></i></a>
                <a href='' className='mx-2 '><i className="fa-brands fa-instagram text-muted"></i></a>
                <a href='' className='mx-2 '><i className="fa-brands fa-linkedin text-muted"></i></a>
                </div>
                <div  className='fs-5 mt-3'> 
                <a href='' className='mx-2 '><i className="fa-brands fa-youtube text-muted"></i></a>
                <a href=''className='mx-2 '> <i className="fa-brands fa-whatsapp text-muted"></i></a>
                <a href='' className='mx-2'><i className="fa-brands fa-telegram text-muted"></i></a>
                
                </div>


                </div>
                <div className="col-3 ml-5">
                    <h5>Company</h5>
               <a href="#" className=' footerAnchorTag text-muted '> About</a>   
              <a href= "#" className='footerAnchorTag text-muted  '>Products</a>
              <a href= "#" className='footerAnchorTag text-muted '>Priciing</a>
              <a href= "#" className='footerAnchorTag text-muted'>Referral programme</a>
              <a href= "#" className='footerAnchorTag text-muted'>Careers</a> 
              <a href= "#" className='footerAnchorTag text-muted'>Zerodha.tech</a> 
              <a href= "#" className='footerAnchorTag text-muted'>Press & media</a> 
              <a href= "#" className='footerAnchorTag text-muted'>Zerodha Cares (CSR)</a> 

                    </div>
               
                <div className="col-3">
                    <h5>Support</h5>
                    <a href='' className='footerAnchorTag text-muted'>Contact us</a> 
                    <a href='' className='footerAnchorTag text-muted'> Support portal</a> 
                    <a href='' className='footerAnchorTag text-muted'> Z-Connect blog</a>
                    <a href='' className='footerAnchorTag text-muted'>List of charges</a>
                    <a href='' className='footerAnchorTag text-muted'>Downloads & resources</a> 
                    <a href='' className='footerAnchorTag text-muted'>Videos</a>
                    <a href='' className='footerAnchorTag text-muted'>Market overview</a>
                    <a href='' className='footerAnchorTag text-muted '>How to file a complaint?</a> 
                    <a href='' className='footerAnchorTag text-muted'>Status of your complaints</a>                
                    </div>
               
               
                <div className="col-3"> 
                    <h5>Account</h5>
                    <a href='' className='footerAnchorTag text-muted'>Open an account</a>
                    <a href='' className='footerAnchorTag text-muted'> Fund transfer</a>
                </div>
            </div>
            
        </div>
        </footer>
        </>

     );
}

export default supportFooter;