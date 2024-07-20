import React from 'react';
import googlePlayBadge from "../media/imgaes/googlePlayBadge.svg";
import appstoreBadge from "../media/imgaes/appstoreBadge.svg";
import '../home/Home.css'

function RightSection({ tittle, description, tryDemo, learnMore,imageURL}) {
    return (
    
    <>
   <div className="container">
    <div className="row">
        <div className="col-5">
        <div className="ml-5" style={{ marginRight:"20%", lineHeight:"2rem" , marginTop:"35%"}}>
            <h1 className="mt-5 ">{tittle}</h1>
            <p className="mt-3"> {description}</p>
            <a href="" className="mx-5">{tryDemo}</a>
            <a href="">{learnMore}</a>
            <img src={googlePlayBadge} alt="googlePlayBadge" className="mx-4 mt-4" />
            <img src={appstoreBadge} alt="appstoreBadge"  className="mt-4"/></div>
          </div>
       
       
        <div className="col-7" >
        <div className=""> <img src={imageURL}/> </div>
        
        </div>
    </div>
   </div>
    </>
     );
}

export default RightSection;