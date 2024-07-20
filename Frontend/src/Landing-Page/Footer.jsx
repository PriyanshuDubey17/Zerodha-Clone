import React from 'react';
import logo from '../Landing-Page/media/imgaes/logo.svg';
import './home/Home.css'

function Footer() {
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
            
            <div className='mt-5'>
            <p  className=' text-muted pr-3 ' style={{fontSize:"0.7rem"}}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="">complaints@zerodha.com</a>,<a href=""> for DP related to dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
           
           
            <p className=' text-muted pr-3 ' style={{fontSize:"0.7rem"}}>Procedure to file a complaint on <a href="">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
            
            <p className=' text-muted pr-3 ' style={{fontSize:"0.7rem"}}><a href="">Smart Online Dispute Resolution</a> | <a href="">Grievances Redressal Mechanism </a></p>
            
            <p className=' text-muted pr-3 ' style={{fontSize:"0.7rem"}}>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
           
            <p className=' text-muted pr-3 ' style={{fontSize:"0.7rem"}}>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
           
            <p className=' text-muted pr-3  ' style={{fontSize:"0.7rem"}}>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="">create a ticket here</a>.</p>
            </div>
            <div className="mt-3"  style={{display:"flex", justifyContent:"center"}}>
               
        <a href="" className='text-muted  mx-2' style={{fontWeight:"500",fontSize:"0.8rem"}}> NSE</a>
        <a href="" className='text-muted  mx-2' style={{fontWeight:"500",fontSize:"0.8rem"}}>BSE</a>
        <a href="" className='text-muted  mx-2' style={{fontWeight:"500",fontSize:"0.8rem"}}> MCX</a>
        <a href="" className='text-muted  mx-2' style={{fontWeight:"500",fontSize:"0.8rem"}}>Terms & conditions</a>
        <a href="" className='text-muted  mx-2' style={{fontWeight:"500",fontSize:"0.8rem"}}>Policies & procedures</a>
        <a href="" className='text-muted  mx-2' style={{fontWeight:"500",fontSize:"0.8rem"}}>  Privacy policy</a>
        <a href="" className='text-muted  mx-2' style={{fontWeight:"500",fontSize:"0.8rem"}}> Disclosure</a>
        <a href="" className='text-muted  mx-2' style={{fontWeight:"500",fontSize:"0.8rem"}}> For investor's attention</a>
        <a href="" className='text-muted  mx-2' style={{fontWeight:"500",fontSize:"0.8rem"}}>Investor charter</a>
            </div>
        
        </div>
        </footer>
        </>

     );
}

export default Footer;