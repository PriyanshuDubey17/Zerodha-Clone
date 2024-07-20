import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Hero from './Hero';
import kite from '../media/imgaes/kite.png'
import varsity from '../media/imgaes/varsity.png'
import coin from '../media/imgaes/coin.png'
import console from '../media/imgaes/console.png'





function ProductPage() {
    return ( 
        <>
        
        <Hero/>
        <LeftSection  imageURL={kite} tittle="Kite" description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="Try demo →" learnMore="Learn more →"/>
       
        <RightSection  tittle="Console" description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." tryDemo="Learn more →" learnMore="" imageURL={console}/>


        <LeftSection  imageURL={coin} tittle="Coin" description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="Coin →" learnMore=""/>

  
        <RightSection tittle="Kite Connect API" description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our" tryDemo="Learn more →" learnMore="" imageURL={console}/>

        <LeftSection  imageURL={varsity} tittle="Varsity mobile" description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="Kite Connect →"/>


        <Universe/>
        
        </>
     );
}

export default ProductPage;