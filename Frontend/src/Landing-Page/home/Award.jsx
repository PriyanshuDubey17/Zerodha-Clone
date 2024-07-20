import React from 'react';
import largestBroker from '../media/imgaes/largestBroker.svg';
import pressLogos from '../media/imgaes/pressLogos.png';
import './Home.css'


function Award() {
    return ( 
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-6 p-5 ">
                <img src={largestBroker} alt="Hero Image"  className="mb-5"/>
                </div>
                <div className="col-6 p-5">
                    <h2 className='mb-4 mt-5' >Largest stock broker in India</h2>
                    <p className='mb-5 mt-3'>1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='container'>
                        <div className="row">
                            <div className="col-6">
                                <ul>
                                    <li><p>Futures and Options</p></li>
                                    <li style={{ width:"13rem"}}><p>Commodity derivatives</p></li>
                                    <li><p>Currency derivatives</p></li>
                                </ul>
                            </div>
                            <div className="col-6">
                            <ul>
                                    <li><p>Stocks & IPOs</p></li>
                                    <li><p>Direct mutual funds</p></li>
                                    <li style={{ width:"13rem"}}><p>Bonds and Govt.Securities</p></li>
                                </ul>

                            </div>
                        </div>
                        <img src={pressLogos} alt="Hero Image"  className="mb-5" style={{width:"99%"}}/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Award;