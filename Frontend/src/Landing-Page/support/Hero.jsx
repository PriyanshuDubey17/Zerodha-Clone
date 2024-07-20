import React from 'react';
import "../home/Home.css"

function Hero() {
    return ( 
    <>
    <div className="container-flued "style={{backgroundColor:"#387ED1"}}>             {/*flued ko htane se jo support ke hero section me jo bag hai ohh fix ho jayega */}
     <div className="row">
        <div className="col-8">
     <div className="p-5"  style={{  marginLeft: "5%"}}><h5 style={{color:"white"}} > Support Portal</h5></div></div>

     <div className="col-4 fs-7">
          <div className="text-center p-5" style={{fontWeight:"300"}}>  <a href=""style={{color:"white" ,textDecoration:"underline"}} >Track tickets</a></div>
         
        </div>
     </div>

      </div>
      <div className="container-flued "style={{backgroundColor:"#387ED1"}}>
     <div className="row">
        <div className="col-7">
            <h5 style={{color:"white", marginLeft: "5%",  lineHeight:"2rem"}} className="p-5">Search for an answer or browse help topics to create a ticket</h5> 
           
            <div class="search-div " style={{color:"white", marginLeft: "10%"}}>
    <input type="text" placeholder="Eg: how to activate F&O, why is my order getting rejected" class="search-input p-3" />
    <i class="fa-solid fa-magnifying-glass search-icon"></i>
</div>
<div className='anchor-in-search p-5 '>
<div className='span mb-4'>
<a href=""style={{color:"white" ,textDecoration:"underline"}} className='mx-3 ' >Track account opening</a>

<a href="" style={{color:"white" ,textDecoration:"underline"}}className='mx-3' >Track segment activation</a>
 <a href="" style={{color:"white" ,textDecoration:"underline"}} className='mt-3'>Intraday margins</a> <br />
 <div className='mt-3'>
 <a href="" style={{color:"white" ,textDecoration:"underline"}} className='p-3'>Kite user manual</a>
 </div></div>
 </div>
            </div>
     
     <div className="col-5 " style={{color:"white"}}>
          <div className="pt-5"><h4 className='mt-5 pt-5' style={{color:"white"}}>Featured</h4></div>
         <div className="mt-3">
         <a href="" style={{color:"white"}} className=''>1.Surveillance measure on scrips - July 2024</a> <br />
         <div className="mt-3"><a href="" style={{color:"white"}} className='pt-3'>2.Latest Intraday leverages and Square-off timings</a></div>
         </div>
         
        </div>
    
     </div>
      </div>

     </> 
     );
}

export default Hero;