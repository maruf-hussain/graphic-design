import React from 'react';
import './Banner.css'
import BrushSharpIcon from '@mui/icons-material/BrushSharp';

import img1 from '../../../images/bg3.png'
import img2 from '../../../images/bg.png'
import img3 from '../../../images/bg2.png'
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';






const Banner = () => {
  


    return (
        <div className='banner-main'>
          <div className='baneer-body'>
          <label for="show-search" class="search-icon"></label>
          <p className='banner-heading2' style={{fontSize:'42px', fontWeight:'bold', color:'white', }}> Custom Logo Design<br/><span> <p className='banner-heading' style={{fontSize:'32px', fontWeight:'bold', color:'white', }}>Get Logo From World Best Logo Designer</p></span></p>
         
          <p className='search-text' style={{fontSize:'20px', color:'white', }}>Find the perfect freelance services for your business</p>
      <form action="#" className="search-box">
        <input className='search-field' style={{width:'550px', height:'50px',borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px', border:'none'}} type="text" placeholder="Try Your Design..."  required></input>
        <button type="submit" id="search-submit">Search</button>
      </form>
            <div className='banner-icbtn'>
               <button>Loream Ipsum</button>
               <button>Loream Ipsum</button>
               <button>Loream Ipsum</button>
               
            </div>
          </div>



          <div className='banner-2'>
         <div className='banner-body'>    
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src={img1}  alt="..."></img>
    </div>
    <div class="carousel-item" data-bs-interval="500">
      <img src={img2}  alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={img3} alt="..."></img>
    </div>
  </div>
</div></div>
    
          </div>
            </div> 

        
    );
};

export default Banner;