import React from 'react';
import '../home/Home.css'
import nithinKamath from '../media/imgaes/nithinKamath.jpg'

function Team() {
    return ( 
        <>
        
        <div className="container  ">
            <div className="row text-center ">
                <h1 className='fs-1 mb-5'>People</h1>
            </div>
        </div>
        
        <div className="container mt-5">
            <div className="row" >
               <div className="col-6" >
                <img src={nithinKamath} alt="nithinKamath" style={{borderRadius:"100%", width:"50%" , marginLeft:"10rem"}} className='mb-5' />
                <h5 className='text-center'>Nithin Kamath</h5>
                <p className='text-center'>Founder, CEO</p>
               </div>
               <div className="col-6 pl-5" style={{lineHeight:"1.8rem"}}>
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                
                <p> Playing basketball is his zen.</p>
                <p> Connect on <a href="">Homepage</a>/ <a href="">TradingQnA </a>/ <a href="">Twitter</a></p>
               </div>
            </div>
            
        </div>
        
        
        </>
     );
}

export default Team;
