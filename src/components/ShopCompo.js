import React,{useEffect,useState,useRef,useContext} from 'react';
import {NavDropdown,Col,Row,OverlayTrigger} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Navbar from '../components/Navbar';
import {Store} from "../context/store";


function ShopCompo(props) {
  let store = useContext(Store);
 let [pro, setPro] = store.items;
  let [price, setPrice]=store.storePrice
  let [image, setImage] =store.storeImage;
  let [name, setName] = store.storeName;
  let [proId, setProId] = store.storeId;
  let [ids,setIds] = store.ctxId
  
  function addCart(id) {
    setImage(props.image);
    setName(props.name);
    setPrice(props.price);
    setIds(props.id)
    // console.log(ids)
  };
  return (
     
            <div className="shopContent">
           
         <Row> 
        {pro.map((item, index) => {
       
          return (

            <Col style={{ display: '' }}>
              <div className="shopCntWrapper">
                <Link to="/product" onClick={() => addCart(props.id)}>
                  <div>
                    <img src={`http://mernhosting.herokuapp.com${props.image}`} />
                  </div>
                </Link>

                <div className="shopDetails">
                  <div>
                    <Link to="">{props.name}</Link>
                  </div>
                  <div>
                    {['bottom'].map((placement) => (
                      <OverlayTrigger
                        key={placement}
                        placement={placement}
                        overlay={
                          <div className="bg-white p-2">
                            <p>Sorry, content is not available.</p>

                          </div>
                        }
                          
                      >
                        <div className="starImage">
                          <img src={props.StarImg} alt="flag" />
                          <Link>2,345</Link>
                        </div>
         
                      </OverlayTrigger>
                    ))}
                  </div>
                  <div style={{ color: 'red' }}>
                    <h1>${props.price}</h1>
                  </div>
                  <div>
                    <>Ships to Nigeria</>
                  </div>
                  <div>More Buying Choices</div>
                  <div>$322.00 <Link>(141 used & new offers)</Link></div>
                </div>

              </div>

            </Col>
          )
        })}
      </Row>
     
            </div>
    )
}
export default ShopCompo;
             
               
    
