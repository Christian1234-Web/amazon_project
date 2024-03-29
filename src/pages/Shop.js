import React,{useContext,useState,useRef,useEffect} from 'react';
import {NavDropdown,Col,Row,OverlayTrigger} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ShopCompo from '../components/ShopCompo';

import LoveImg from '../Images/love-img.png';
import CheckBoxImg from '../Images/checkBox-img.png';
import StarUp from '../Images/starUp-img.png';

import StarImg from '../Images/star-img.png';

import Footer from '../components/Footer';
import AddToCart from '../components/AddToCart';
import {Store} from "../context/store";


function Shop(props) {
 
  let store = useContext(Store);
  let [pro, setPro] = store.items;
  let [proId, setProId] = store.storeId;

  useEffect(() => {
    let url = "http://206.189.124.254:9000/products";
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setPro(result);
        setProId(result[0]._id)

      });
  }, []);

  return (
     <>
      <Navbar/>
      <section className="shopContainer">
        <div className="flex shopSec-1">
          <div>
      <p>1-24 of over 6,000 results</p>
          </div>
          <div>

            <NavDropdown title="Sort by: Feature" id="basic-nav-dropdown"
              className="text" style={{ padding: '1px', color: '#000', borderRadius: '5px', backgroundColor: '#D5D9D9', borderColor: '#adb1b8 #a2a6ac #8d9096' }}>
        <NavDropdown.Item href="#action/3.1">All document</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Arts & Crafts</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Automotive</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Baby</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Beauty and personal care </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Books</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Computers</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Digital music</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
          </div>
        </div>

        <div className="shopSec-2">
          <div className="shopMenu">
            <div className="shopClimate">
            {/* <button onClick={()=>addCart()}>Add to Cart</button> */}

              <div>
                <h6>Climate Pledge Friendly</h6>
             </div>
              <div>
                <img src={CheckBoxImg}/><Link>Climate Pledge Friendly</Link>
              </div>
           </div>
           <div className="shopDepartment">
              <div>
                <h6>Department</h6>
              </div>
              <div>
                <Link>Computers</Link>
              </div>
              <div>
                <h6>Computers & Tablets</h6>
              </div>
              <div>
                <Link>Desktops</Link>
              </div>
              <div>
                <Link>Laptops</Link>
              </div>
              <div>
                <Link>Tablets</Link>
              </div>
            </div>
            
            <div className="shopAvg">
              <div>
              <h6>Avg. Customer Review</h6>
              </div>
              <div>
                <img src={StarUp}/>
              </div>
            </div>
            <div className="shopFeatured">
              <div>
                <h6>Featured Brands</h6>
              </div>
              <div>
                <Link><img src={CheckBoxImg }/>HP</Link>
              </div>
              <div>
                <Link><img src={CheckBoxImg }/>Lenova</Link>
              </div>
              <div>
                <Link><img src={CheckBoxImg }/>Acer</Link>
              </div>
              <div>
                <Link><img src={CheckBoxImg }/>SAMSUNG</Link>
              </div>
              <div>
                <Link><img src={CheckBoxImg }/>ASUS</Link>
              </div>
              <div>
                <Link><img src={CheckBoxImg }/>qunyiCO</Link>
              </div>
              <div>
                <Link><img src={CheckBoxImg }/>Apple</Link>
              </div>

            </div>
            <div className="shopPrice">
              <div>
                <h6>Price</h6>
              </div>
              <div>
                <Link>Under $25</Link>
              </div>
              <div>
                <Link>$25 to $50</Link>
              </div>
              <div>
                <Link>$50 to $100</Link>
              </div>
              <div>
                <Link>$100 to $200</Link>
              </div>
              <div>
                <Link>$200 & Above</Link>
              </div>
              <div className="shopMinxBtn">
                <div>
                <button className="min">$Min</button>
                </div>
                <div>
                <button className="min">$Max</button>
                </div>
                <div>
                <button className="go">Go</button>
               </div> 
              </div>
            
         </div>
         
            <div className="shopPackaging ">
              <div>
                <h6>Packaging Option</h6>
              </div>
              <div>
                <img src={CheckBoxImg}/> <Link>Frustration-Free Packaging</Link>
              </div>

            </div>
            <div className="shopNews">
              <div>
                <h6>New & Upcoming</h6>
              </div>
              <div>
                <Link>New Arrivals</Link>
              </div>
</div>
            <div className="shopCertification">
              <div>
                <h6>Certifications</h6>
              </div>
              <div>
              <img src={CheckBoxImg}/> <Link>Energy Star</Link>
              </div>
            </div>
            <div className="shopCondition">
              <div>
                <h6>Condition</h6>
              </div>
              <div>
                <Link>New</Link>
              </div>
              <div>
                <Link>Renewed</Link>
              </div>
              <div>
                <Link>Used</Link>
              </div>
</div>

            <div className="shopSeller">
              <div>
              <img src={CheckBoxImg}/> <Link>Amazon Export Sales LLC.</Link>
              </div>
              <div>
              <img src={CheckBoxImg}/> <Link>Amazon.com.</Link>
              </div>
              <div>
              <img src={CheckBoxImg}/> <img src={LoveImg}/> <Link>OnlinEmart⁡⁢ ⁡⁢ (We record SN)</Link>
              </div>
              <div>
              <img src={CheckBoxImg}/> <Link>PrimeTimeBuys</Link>
              </div>
              <div>
              <img src={CheckBoxImg}/> <Link>Happy Ranger</Link>
              </div>
              <div>
              <img src={CheckBoxImg}/> <Link>CellularStream</Link>
              </div>
              <div>
              <img src={CheckBoxImg}/> <Link>STC Distributors (Serial # Recorded)</Link>
              </div>
              <div>
              <img src={CheckBoxImg}/> <Link>Tek Legend</Link>
              </div>
              <div>
              <img src={CheckBoxImg}/> <Link>Independent Follower Tech</Link>
              </div>
              <div>
              <img src={CheckBoxImg}/> <Link>Kailone Tech</Link>
              </div>
              
</div>
            <div className="shopAvailability">
              <div>
                <h6>Availability</h6>
              </div>
              <div>
              <img src={CheckBoxImg}/> <Link>Include Out of Stock</Link>
              </div>
</div>





          </div>
          
          <div className="shopCompGp">
            <div className="">
              {/* <AddToCart
              /> */}
               <div>
              {/* {pro.map((e) => { */}
                {/* return ( */}
                  
                  
              {/* )
            })} */}
                {/* <div>subtotal({msg} items):${total}</div> */}
              </div>
              {pro.map((item, index) => {
                if (item.category === 'chris') {
                  return (

                    <ShopCompo
                    key={index}
                  name={item.name}
                      image={item.image}
                      price={item.price}
                  category={item.category}
                  quantity={item.quantity}
                  description={item.description}
                  StarImg={StarImg}
                      id={item._id}
                    />
              )  }
            })}
            </div>
           
            
            <div className="shopHelp">
              <div>
                <h5>Need help?</h5>
              </div>
              <div>
                <Link to="">Visit the help section</Link> or <Link to="">contact us</Link>  
              </div>
            </div>
        
          </div>
  
        </div>
        <Footer/>
</section>
    </>
  )
}
export default Shop;