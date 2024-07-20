import React from 'react';
import loginPic from '../media/imgaes/loginPic.png';
import '../home/Home.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Signup() {
    return ( 
       <>
         <div className="container mt-5 ">
        <div className="row">
          <div className="col-5">
            <img src={loginPic} className="p-5" />
          </div>
          <div className="col-2 " ></div>
          <div className="col-5 p-5">
           <div className="ml-5" style={{ marginLeft:"20%", lineHeight:"2rem"}}>
            <h3 className="mt-5 ">Signup now</h3>
            <p className="mt-3 text-muted"> Or track your existing application.</p>
            <TextField
        id="outlined-uncontrolled"
        label="+91"
        defaultValue="Enter Mob No"
      />
    <p className='mt-2 text-muted'>You will receive an OTP on your number</p>
<Button variant="contained"> Contune</Button>
  <p className='mt-2'  style={{fontSize:"0.8rem"}}><a href=''>Want to open an NRI account?</a></p>
            
            </div>
          </div>
        </div>
      </div>
       <div className="container">
        <div className="row text-muted text-center" style={{fontSize:"0.8rem"}}>
     <div className=""><p>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.</p></div>
     <div className=""> <p>Please visit  to know more.<a href="">this article</a></p></div>
     <div className=""><p> If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the  <a href="  ">offline forms.</a> For help, <a href="">click here</a> .</p></div>

        </div>
       </div>
       </>
     );
}

export default Signup;
