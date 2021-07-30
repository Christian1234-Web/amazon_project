import React,{useRef} from 'react';
import { Link } from 'react-router-dom';
import {OverlayTrigger,Row,Col} from 'react-bootstrap'

import StarImg from '../Images/star-img.png';
import ProRelatedImg1 from '../Images/proRelated-img1.jpg';
import ProRelatedImg2 from '../Images/proRelated-img2.jpg';
import ProRelatedImg3 from '../Images/proRelated-img3.jpg';
import ProRelatedImg4 from '../Images/proRelated-img4.jpg';
import ProRelatedImg5 from '../Images/proRelated-img5.jpg';
import ProRelatedImg6 from '../Images/proRelated-img6.jpg';
import ProRelatedImg7 from '../Images/proRelated-img7.jpg';


function ProductSec3() {
    return (
        <>

            <div className="shopContent proContent">
                <div>
                <h3 className="proTxtOrange">Products related to this item</h3>   

                </div>
            <Row>
              <Col>
                <div className="shopCntWrapper">
                  
                <div>
                  <img src={ProRelatedImg1} />
                  </div>
                  
                  <div className="shopDetails">
                <div>
                                    <Link to="">Tablet 10 Inch Android 9 HD Dual Sim Tablets with Quad Core, 32GB ROM /128 GB Expand...</Link>
                </div>
                <div>
                {[ 'bottom'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
          <div className="bg-white p-2">
          <p>Tablet 10 Inch Android 9 HD Dual Sim Tablets with Quad Core, 32GB ROM /128 GB Expand, <br></br>
            3G Phone Call, WiFi, Bluetooth, Dual Camera, GPS, IPS Touchscreen,
            <br></br> GMS Google Certified Tablet PC, (Black)
Tablet 10 Inch Android 9 HD Dual Sim Tablets with Quad Core, 32GB ROM /128 GB Expan...</p>

         </div>
      }
                          
                  >
                    <div className="starImage">
                    <img src={StarImg} alt="flag" />
           <Link>2,345</Link>
                    </div>
         
    </OverlayTrigger>
  ))}
                </div>
                
                <div>
                  <>Ships to Nigeria</>
                </div>
                <div>More Buying Choices</div>
                <div>$322.00 <Link>(141 used & new offers)</Link></div>
                  </div>
                  
                </div>

              </Col>
             
               <Col>
              <div className="shopCntWrapper">
                  
                <div >
                  <img src={ProRelatedImg2} />
                  </div>
                  
                  <div className="shopDetails">

                <div>
                  <Link to="/product">New 10 Inch Tablets, Android Tablet, Octa-Core Tablet, 3GB RAM, 32GB Storage Support...</Link>
                </div>
                <div>
                {[ 'bottom'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
          <div className="bg-white p-2">
          <p>New 10 Inch Tablets, Android Tablet, Octa-Core Tablet, 3GB RAM, 32GB Storage Support 5G Wi-Fi 8 MP Dual Camera,FM,GPS <br></br>
            and 10.1'' IPS Full HD Display for Online Lesson,Reading (Including Case) Black <br></br>
New 10 Inch Tablets, Android Tablet, Octa-Core Tablet, 3GB RAM, 32GB Storage Suppor...</p>

         </div>
      }
                          
       >
 <div className="starImage">
                    <img src={StarImg} alt="flag" />
           <Link>2,345</Link>
                    </div>
                    
                  </OverlayTrigger>
  ))}
                </div>
                
                <div>
                  <>Ships to Nigeria</>
                </div>
                <div>More Buying Choices</div>
                <div>$322.00 <Link>(141 used & new offers)</Link></div>
                  </div>
                  
                </div>
              </Col>
             
              <Col>
              <div className="shopCntWrapper">
                  
                <div>
                  <img src={ProRelatedImg3} />
                  </div>
                  
                  <div className="shopDetails">

                <div>
                    <Link to=" ">Tablet 8 inch, Android 10.0, 2GB RAM 32GB ROM, 3G LTE Phone Tablet, Quad-Core..</Link>
                </div>
                <div>
                {[ 'bottom'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
          <div className="bg-white p-2">
          <p>Tablet 8 inch, Android 10.0, 2GB RAM 32GB ROM, 3G LTE Phone Tablet, Quad-Core Processor,<br></br>
            1280x800 HD IPS Touch Screen,8MP+5MP Dual Camera,Wi-Fi,Bluetooth,GPS(Golden, Metal Material)<br></br>
Tablet 8 inch, Android 10.0, 2GB RAM 32GB ROM, 3G LTE Phone Tablet, Quad-Core…</p>

         </div>
      }
                          
       >
     <div className="starImage">
      <img src={StarImg} alt="flag" />
          <Link>2,345</Link>
                    </div>
                  </OverlayTrigger>
  ))}
                </div>
                
                <div>
                  <>Ships to Nigeria</>
                </div>
                <div>More Buying Choices</div>
                <div>$322.00 <Link>(141 used & new offers)</Link></div>
                  </div>
                  
                </div>
              </Col> 

              <Col>
              <div className="shopCntWrapper">
                  
                <div>
                  <img src={ProRelatedImg4} />
                  </div>
                  
                  <div className="shopDetails">

                <div>
                    <Link to=" ">Pritom TronPad L10 Tablet - 10'' Android 10.0 Tablet, Octa-Core Processor, 3G RAM, 32G ROM....
</Link>
                </div>
                <div>
                {[ 'bottom'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
          <div className="bg-white p-2">
              <p>Pritom TronPad L10 Tablet - 10'' Android 10.0 Tablet, Octa-Core Processor, 3G RAM, 32G ROM,<br></br>
                      6000mAh Battery, 5G&2.4G WiFi, GPS, Dual Camera, USB C Tablet PC, Full Metal Body<br></br>
Pritom TronPad L10 Tablet - 10'' Android 10.0 Tablet, Octa-Core Processor, 3G RAM, ....</p>

         </div>
      }
                          
       >
     <div className="starImage">
      <img src={StarImg} alt="flag" />
          <Link>2,345</Link>
                    </div>
                  </OverlayTrigger>
  ))}
                </div>
                
                <div>
                  <>Ships to Nigeria</>
                </div>
                <div>More Buying Choices</div>
                <div>$322.00 <Link>(141 used & new offers)</Link></div>
                  </div>
                  
                </div>
            </Col>
            
            <Col>
              <div className="shopCntWrapper">
                  
                <div>
                  <img src={ProRelatedImg5} />
                  </div>
                  
                  <div className="shopDetails">

                <div>
                    <Link to=" ">Android 10.0 Tablet : MEBERRY 10 inch Tablets with 4GB RAM+64GB ROM|
                    </Link>
                </div>
                <div>
                {[ 'bottom'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
          <div className="bg-white p-2">
          <p>Android 10.0 Tablet : MEBERRY 10 inch Tablets with 4GB RAM+64GB ROM| 128GB Expansion|<br></br>
            Octa-Core Processor| Google Certified| 8000mAh Battery| WiFi| GPS| Double Camera, Blue <br></br>
Android 10.0 Tablet : MEBERRY 10 inch Tablets with 4GB RAM+64GB ROM|…</p>

         </div>
      }
                          
       >
     <div className="starImage">
      <img src={StarImg} alt="flag" />
          <Link>2,345</Link>
                    </div>
                  </OverlayTrigger>
  ))}
                </div>
                
                <div>
                  <>Ships to Nigeria</>
                </div>
                <div>More Buying Choices</div>
                <div>$322.00 <Link>(141 used & new offers)</Link></div>
                  </div>
                  
                </div>
            </Col>
            
            <Col>
              <div className="shopCntWrapper">
                  
                <div>
                  <img src={ProRelatedImg6} />
                  </div>
                  
                  <div className="shopDetails">

                <div>
                  <Link to=" ">Android 10.0 Tablet : MEBERRY 10" Ultra-Fast 4GB/RAM,64GB/ROM Tablets-8000mAh...</Link>
                </div>
                <div>
                {[ 'bottom'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
          <div className="bg-white p-2">
          <p>Android 10.0 Tablet : MEBERRY 10" Ultra-Fast 4GB/RAM,64GB/ROM Tablets-8000mAh Battery-WiFi Support - Bluetooth Keyboard <br>
          </br>| Mouse | M7 Tablet Cover and More Include - Blue
Android 10.0 Tablet : MEBERRY 10"<br></br> Ultra-Fast 4GB/RAM,64GB/ROM Tablets-8000mAh…</p>

         </div>
      }
                          
       >
     <div className="starImage">
      <img src={StarImg} alt="flag" />
          <Link>2,345</Link>
                    </div>
                  </OverlayTrigger>
  ))}
                </div>
                
                <div>
                  <>Ships to Nigeria</>
                </div>
                <div>More Buying Choices</div>
                <div>$322.00 <Link>(141 used & new offers)</Link></div>
                  </div>
                  
                </div>
            </Col>
            
            <Col>
              <div className="shopCntWrapper">
                  
                <div>
                  <img src={ProRelatedImg7} />
                  </div>
                  
                  <div className="shopDetails">

                <div>
                  <Link to=" ">Android Tablet 10 inch, PRITOM M10, 2 GB RAM, 32 GB Android 9.0 Tablet, 10.1 inch IPS HD Display....</Link>
                </div>
                <div>
                {[ 'bottom'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
          <div className="bg-white p-2">
          <p>Android Tablet 10 inch, PRITOM M10, 2 GB RAM, 32 GB Android 9.0 Tablet, 10.1 inch IPS HD Display, GPS, FM, <br>
          </br>Quad-Core Processor, Wi-Fi (M10 Black)
Android Tablet 10 inch, PRITOM M10, <br></br>2 GB RAM, 32 GB Android 9.0 Tablet, 10.1 inch I...</p>

         </div>
      }
                          
       >
     <div className="starImage">
      <img src={StarImg} alt="flag" />
          <Link>2,345</Link>
                    </div>
                  </OverlayTrigger>
  ))}
                </div>
                
                <div>
                  <>Ships to Nigeria</>
                </div>
                <div>More Buying Choices</div>
                <div>$322.00 <Link>(141 used & new offers)</Link></div>
                  </div>
                  
                </div>
              </Col> 
                </Row>
               
            </div>
            </>
    )
}
export default ProductSec3;