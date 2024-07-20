import React from 'react';
import '../home/Home.css'
import smallcaseLogo from '../media/imgaes/smallcaseLogo.png'
import streakLogo from '../media/imgaes/streakLogo.png'
import sensibullLogo from '../media/imgaes/sensibullLogo.svg'
import  tijori from '../media/imgaes/tijori.svg'
import zerodhaFundhouse from '../media/imgaes/zerodhaFundhouse.png'  
import dittoLogo from '../media/imgaes/dittoLogo.png'   


function Universe() {
    return ( 
        <>
        <div className="container">
          <div className="row  text-center">
           <p className="p-2 fs-5">Want to know more about our technology stack? Check out the <a href="">Zerodha.tech</a> blog.</p>
            <h1 className="mt-5 pt-5">The Zerodha Universe</h1>
            <p className="p-3 mt-2">
            Extend your trading and investment experience even further with our partner platforms
            </p> 
          </div>
        </div>
        <div className="container p-5">
            <div className="row p-5 text-center">
                <div className="col-4 p-3">
                    <img src={smallcaseLogo} alt="smallcaseLogo"/>
                    <p className='text-small text-muted mb-5'>Thematic investment platform</p>

                    <img src={zerodhaFundhouse} alt="zerodhaFundhouse" style={{width:"50%"}} className='mt-5'/>
                    <p className='text-small text-muted mt-2'>Asset management</p>

                </div>
                <div className="col-4 p-3" >
                <img src={streakLogo} alt="streakLogo " style={{width:"40%"}}/>
                <p className='text-small text-muted mb-5 mt-2'>Algo & strategy platform</p>
                <img src={tijori} alt="tijori" style={{width:"50%"}} className='mt-5'/>
                <p className='text-small text-muted '>Fundamental research platform</p>

                </div>
                <div className="col-4 p-3">
                <img src={sensibullLogo} alt="sensibullLogo"/>
                <p className='text-small text-muted mb-5 mt-3'>Options trading platform</p>

                <img src={dittoLogo} alt="dittoLogo" style={{width:"50%"}} className='mt-5'/>
                <p className='text-small text-muted mt-1 pl-5'>Insurance</p>
                </div>
            </div>
            <div className="text-center">
            <button
            className="p-2 btn btn-primary fs-5 mb-5 "
            style={{ width: "20%", margin: " 0 auto" }}
          >
            Sign up now
          </button>
            </div>
          
            
        </div>
        </>
     );
}

export default Universe;