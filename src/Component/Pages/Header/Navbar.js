import React, { useState } from 'react';
import './Navbar.css'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import { Link } from 'react-router-dom';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import UseFirebase from '../Login/Hooks/UseFirebase';
import initializeAuthentication from '../Login/Firebase/firebaseinitilize';
import { Modal } from 'react-bootstrap';


initializeAuthentication();

const provider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();


const Navbar = () => {

  const {user, logOut} = UseFirebase();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  const handleGoogleSignIn = () => {
      const auth = getAuth();
      signInWithPopup(auth, provider)
      .then(result => {
          const user = result.user;
          console.log(user);
         
        
  
      })
  
  } 
  const handleFacebookSignIn = () => {
      const auth = getAuth();
      signInWithPopup(auth, FacebookProvider)
      .then(result => {
          const user = result.user;
          console.log(user);
  
      })
  
  } 

    return (
     
       <div>
  <nav>
         <div className="container">
      <div ><img className='logo' src='https://ww1.prweb.com/prfiles/2018/08/30/15728812/dp_log_print_color%20-%20jpg.jpg' alt='img'/></div>
    
      <input type="radio" name="slider" id="menu-btn"></input>
      <input type="radio" name="slider" id="close-btn"></input>
   
      <ul class="nav-links">
    
     
        <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
        <li><a href="#">ABOUT</a></li>
        <li>
          <a href="#" className="desktop-item">SERVICE</a>
          <input type="checkbox" id="showDrop"></input>
          <label for="showDrop" class="mobile-item">SERVICE</label>
          <ul class="drop-menu">
            <li><a href="#">< BubbleChartIcon/>Logo Design</a></li>
            <li><a href="#"><CreditCardIcon/>Business Card Design</a></li>
            <li><a href="#"><AppRegistrationOutlinedIcon/>Envolepe Design</a></li>
          </ul>
        </li>
        <li><a href="#">PRICING</a></li>
        <li>
          <a href="#" className="desktop-item">OUR WORK</a>
          <input type="checkbox" id="showMega"></input>
          <label for="showMega" class="mobile-item">OUR WORK</label>
          <div class="mega-box">
            <div class="content">
              <div class="row">
                <img style={{backgroundColor:'black'}} src="https://i.ibb.co/qNFw4LS/UNIQUE-removebg-preview.png" alt=""></img>
              </div>
              <div class="row">
                <header>Design Services</header>
                <ul className="mega-links">
                  <li><a href="#">Graphics</a></li>
                  <li><a href="#">Vectors</a></li>
                  <li><a href="#">Business cards</a></li>
                  <li><a href="#">Custom logo</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Email Services</header>
                <ul className="mega-links">
                  <li><a href="#">Personal Email</a></li>
                  <li><a href="#">Business Email</a></li>
                  <li><a href="#">Mobile Email</a></li>
                  <li><a href="#">Web Marketing</a></li>
                  
                </ul>
              </div>
              <div className="row">
                <header>Security services</header>
                <ul class="mega-links">
                  <li><a href="#">Site Seal</a></li>
                  <li><a href="#">VPS Hosting</a></li>
                  <li><a href="#">Privacy Seal</a></li>
                  <li><a href="#">Website design</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li><a href="#">BLOG</a></li>
        <li><a href="#">CONTACT US</a></li>

        <div class="d-flex align-items-center me-5 ">
       
       {
       user.email ?
      
       <button className='log-but' onClick={logOut}>Sign Out<span style={{marginLeft:'7px', color:'black'}}>or</span></button>
       :
       <button className='log-butt' onClick={handleShow}>Sign In<span style={{marginLeft:'7px', color:'black'}}>or</span></button>
       
   }
   
  <Link style={{color: "green"}} to='/register'>Join Now</Link>
       </div>
        
      </ul>
      <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
    </div>
  
       </nav>
       <Modal   show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Login Your Account</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{}}>
            
           
           <div className='form-full'>
          <div className='authentic-button'>
            <button  style={{backgroundColor:'darkslateblue', padding:'5px',  borderRadius:'2px', color:'white', marginBottom:'10px'}}>Continue Wihe Facebook</button>
          <button  onClick={handleGoogleSignIn} style={{backgroundColor:'whitesmoke', border:'1px solid silver', padding:'5px',  borderRadius:'2px', color:'black', marginBottom:'10px'}}><img style={{width:'30px',}} src='https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1' alt=''/>Continue With Google</button>
            <button style={{backgroundColor:'whitesmoke', padding:'5px', border:'1px solid silver',  borderRadius:'2px', color:'black', marginBottom:'10px', }}>Continue With Apple</button>
          </div>
                <form>
                    
                    <input className='input' type="email" name="" id="" placeholder="Your Email" />
                    
                    <input className='input' type="password" name="" id="" placeholder='Your Password' />
                    <br />
                    <input className='submit' type="submit" value="LOGIN" />
                </form>
                <p>Forgot Password</p>
               <div>
              
               </div>
                
            </div></Modal.Body>
            <Modal.Footer>
            <p>New Design Point ? <Link style={{color: "green"}} to='/register'>Join Now</Link></p>
        </Modal.Footer>
      </Modal>
       </div>
    );
};

export default Navbar;