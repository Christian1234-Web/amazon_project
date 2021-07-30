import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import {Store} from "../context/store";
import AmazonLogo from '../Images/logo-ama.png';
import NigerImg from '../Images/niger-img.png';
import SearchIcon from '../Images/search-icon-img.png';
import FirstFlag from '../Images/firstFlag-img.png';
import All from '../Images/all-img.png';
import CartImg from '../Images/cart-img.svg';



function Navbar() {
    let store = useContext(Store)
    let [msg, setMsg] = store.info;

   
   

  return(
     <>
          <section>
              <div className="navigation1">

             
              <ul>
                  <li>
                          <Link to="/index"><img src={AmazonLogo} style={{ height: '58px', objectFit: 'cover' }}/></Link>
                  </li>
                  <li>
                          <Link to=""><img src={NigerImg}/></Link>
              </li>
              </ul>
              
              <ul className="noLi">
              <li className="noBd">

                   <NavDropdown title="All" id="basic-nav-dropdown" className="text bg-white" style={{padding:'4px',color:'#000'}}>
        <NavDropdown.Item href="#action/3.1">All document</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Arts & Crafts</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Automotive</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Baby</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Beauty and personal care </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Books</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Computers</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Digital music</NavDropdown.Item>
        <NavDropdown.Divider />
             <Link to="/adminIndex" style={{padding:'10px'}}> Admin Section</Link>
      </NavDropdown>
                  </li>
                  <li>
                      <input className="ssBox" type="text"/>
                  </li>
                  <li className="ssBg noBd">
                          <img src={SearchIcon} alt="search-icon" style={{ height:'39.8px'}}/>
                  </li>
              </ul>
              <ul>
                  <li>
                         
                          {[ 'bottom'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
          <div className="bg-white p-5">
              <h1>wwo</h1>

         </div>
      }
                          
       >
                                   <img src={FirstFlag} alt="flag" />
    </OverlayTrigger>
  ))}
                  </li>
                  
                      <li>
                  {[ 'bottom'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
          <section className="fstSg">
              <div className="FsBtnCenter">
                  <div className="FstsignBtn">
                      <button className="start">Sign in</button>
                  </div>
                  <div>
                  New customer? <Link to="" className="start">Start here.</Link> 
                  </div>
              </div>
              <div className="accnt">
                  <div>
                      <p>Your Lists</p>
                      <Link to="">Create a lists</Link><br></br>
                      <Link to="">Find a lists or registry</Link><br></br>
                      <Link to="">AmazonSmile Charity Lists</Link>
                     
                  </div>
                
                  <div>
                  <p>Your Account</p>
                      <Link to="">Account</Link><br></br>
                      <Link to="">Orders</Link><br></br>
                      <Link to="">Recommendations</Link><br></br>
                      <Link to="">Browsing History</Link><br></br>
                      <Link to="">Watchlist</Link><br></br>
                      <Link to="">Video Purchases & Rentals</Link><br></br>
                      <Link to="">Kindle Unlimited</Link><br></br>
                      <Link to="">Content & Devices</Link><br></br>
                      <Link to="">Subscribe & Save Items</Link><br></br>                     
                      <Link to="">Memberships & Subscriptions</Link><br></br>
                      <Link to="">Music Library</Link>
                  </div>
              </div>
        </section>
      }
                          
    >
      <Link to="/signup" style={{lineHeight:'1',color:'gainsboro'}}> <span className="fdFnt">Hello Sign in</span><br></br> Account & Lists</Link>
    </OverlayTrigger>
  ))}
                  </li>
                  <li>
                      <Link to="/login"><span className="fdFnt">Returns</span> <br></br> & Orders</Link>
                  </li>
                  <li>
                          <Link to="/cart"><img src={CartImg} alt="cart" style={{ width: '30px' }} />
                              <p style={{ position: 'absolute', color: 'orange', top: '1%', right: '1.5%', fontSize: '18px' }}>{msg}</p></Link>
                          
                  </li>
                  </ul>
                 
              </div>

              <div className="navigation2">

                  <ul>
                      <li>
                          <Link to="">All</Link>
                      </li>
                      <li>
                          <Link to="">Today's Deals</Link>
                      </li>
                      <li>
                          <Link to="">Customer Service</Link>
                      </li>
                      <li>
                          <Link to="">Gifts Cards</Link>
                      </li>
                      <li>
                          <Link to="">Registry</Link>
                      </li>
                      <li>
                          <Link to="">Sell</Link>
                  </li>
                  </ul>

                  <ul>
                      <li>
                          <Link to="">Amazon's response to Covid-19</Link>
                      </li>
                     
                  </ul>

              </div>
</section>

    </>
  )
}
export default Navbar;