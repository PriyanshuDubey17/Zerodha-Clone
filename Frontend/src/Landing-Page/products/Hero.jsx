import React from 'react';
import '../home/Home.css' 
function Hero() {
    return ( 
        <>
       <div className="container border-bottom">
        <div className="row text-center mt-5 p-5">
            <h1 className='p-3'>Technology</h1>
            <p className='fs-5'>Sleek, modern, and intuitive trading platforms</p>

            <p className='p-2'> Check out our <a href="" style={{fontWeight:"500"}}> investment offerings →</a></p>
        </div>
       </div>
        
        </>
     );
}

export default Hero;