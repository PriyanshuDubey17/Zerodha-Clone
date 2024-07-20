import React from 'react';
import './Home.css'
import education from '../media/imgaes/education.svg';

function Education() {
    return ( 
     <div className="container">
        <div className="row">
            <div className="col-6">
            <img src={education} alt="Hero Image"  className=" pr-5 mt-5 pt-5"  style={{ width:"77%"}}/>
           
            </div>
            <div className="col-6 mt-5">
            <h2 className='mt-5 pb-4 '>Free and open market education</h2>
                    <p className='fs-8 text-muted mt-4' style={{ width:"35rem"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="">Varsity <i className="fa-solid fa-arrow-right" style={{color:"#4B7CCB"}}></i></a>

                  
                    <p className='fs-8 text-muted mt-5' style={{ width:"35rem"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="">TradingQ&A  <i className="fa-solid fa-arrow-right" style={{color:"#4B7CCB"}}></i></a>
            </div>
        </div>
     </div>
     );
}

export default Education;