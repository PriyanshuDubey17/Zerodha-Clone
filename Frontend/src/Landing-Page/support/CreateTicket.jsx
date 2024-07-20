import React from 'react';
import '../home/Home.css'

function CreateTicket() {
    return (
        <> 
<div className="container p-5">
    <div className="row "> <h3>To create a ticket, select a relevant topic</h3></div>
</div>

<div className="container">
    <div className="row"> 
        <div className="col-4 ">
           <div style={{marginLeft:"2rem"}}>
           < div style={{marginLeft:"2rem", lineHeight:"2.5rem",fontSize:"0.8rem"}}>
           <a href='' className='fs-4' style={{color:"#424242"}}>  Account Opening</a>
            <br />
           <a href=''> Getting started </a> <br />
           <a href=''> Online </a> <br />
           <a href=''> Offline</a> <br />
           <a href=''>  Charges</a> <br />
           <a href=''> Company, Partnership and HUF</a> <br />
           <a href=''> Non Resident Indian (NRI)</a>
           </div></div>
         

        </div>
        <div className="col-4">
        < div style={{marginLeft:"2rem", lineHeight:"2.5rem", fontSize:"0.8rem"}}>
        <a href='' className='fs-4' style={{color:"#424242"}}> Your Zerodha Account</a>                           

        <br />
           <a href=''> Login credentials </a> <br />
           <a href=''> Your Profile </a> <br />
           <a href=''> Account modification and segment addition</a> <br />
           <a href=''> CMR & DP ID</a> <br />
           <a href=''> Nomination</a> <br />
           <a href=''> Non Resident Indian (NRI)</a>
        </div>  </div>
        <div className="col-4">
        < div style={{marginLeft:"2rem", lineHeight:"2.5rem ",fontSize:"0.8rem" }}>
        <a href='' className='fs-4' style={{color:"#424242"}}>Trading and Markets</a>

        <br />
           <a href=''> Trading FAQs </a> <br />
           <a href=''> Kite </a> <br />
           <a href=''> Margins</a> <br />
           <a href=''>  Product and order types</a> <br />
           <a href=''> Corporate actions</a> <br />
           <a href=''> Kite features</a>
        </div>
    </div> </div>
</div>

<div className="container mt-5">
    <div className="row"> 
        <div className="col-4">
           
            < div style={{marginLeft:"2rem", lineHeight:"2.5rem",fontSize:"0.8rem"}}>
            <a href='' className='fs-4' style={{color:"#424242"}}>  Funds</a>
            <br />
           <a href=''> Fund withdrawal </a> <br />
           <a href=''>Adding funds </a> <br />
           <a href=''> Adding bank accounts</a> <br />
           <a href=''>  eMandates</a> <br />
           </div>

        </div>
        <div className="col-4" >
        < div style={{marginLeft:"2rem", lineHeight:"2.5rem",fontSize:"0.8rem"}}>
        <a href='' className='fs-4' style={{color:"#424242"}}>  Console</a>

        <br />
           <a href=''> IPO </a> <br />
           <a href=''>Portfolio </a> <br />
           <a href=''> Funds statement</a> <br />
           <a href=''>  Profile</a> <br />
           <a href=''> Reports</a> <br />
           <a href=''>Referral program (NRI)</a> </div>
        </div>
        <div className="col-4">
        < div style={{marginLeft:"2rem", lineHeight:"2.5rem",fontSize:"0.8rem"}}>
        <a href='' className='fs-4' style={{color:"#424242"}}>Trading and Markets</a>

        <br />
            <a href=''>Trading and Markets</a><br />
           <a href=''> Getting started</a><br />
           <a href=''> Online</a><br />
           <a href=''> Offline</a><br />
            <a href=''>Charges</a><br />
           <a href=''> Company, Partnership and HUF</a><br />
           <a href=''> Non Resident Indian (NRI)</a></div>
        </div>
    </div>
</div>
</>
     );
}

export default CreateTicket;







