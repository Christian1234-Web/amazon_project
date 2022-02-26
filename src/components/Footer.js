import React from 'react';
import { Link } from 'react-router-dom';
import AmazonLogo from '../Images/logo-ama.png';
import English from '../Images/english-img.png';
import UnitedFlag from '../Images/uniFlag-img.png';
import UsDollar from '../Images/us-dollar-img.png';
import {OverlayTrigger,Tooltip,Button,Col,Row} from 'react-bootstrap'

function Footer() {
  return(
     <>
      <div className="top">
      <p>Back to top</p>
      </div>
      <div className="footer">
        

      <div className="mainFooter">
        <div className="footerCnt">
          <p className="headerTxt">
          Get to Know Us
          </p>
          <Link to="">Careers</Link><br></br>
          <Link to="">Blog</Link><br></br>
          <Link to="">About Amazon</Link><br></br>
          <Link to="">Investor Relations</Link><br></br>
          <Link to="">Amazon Devices</Link>
        </div>
        <div className="footerCnt">
          <p className="headerTxt">
          Make Money with Us   
          </p>
          <Link to="">Sell products on Amazon</Link><br></br>
          <Link to="">Sell on Amazon Business</Link><br></br>
          <Link to="">Sell apps on Amazon</Link><br></br>
          <Link to="">Become an Affiliate</Link><br></br>
          <Link to="">Advertise Your Products</Link><br></br>
          <Link to="">Self-Publish with Us</Link><br></br>
          <Link to="">Host an Amazon Hub</Link><br></br>
          <Link to="">›See More Make Money<br></br> with Us</Link>
        
        </div>
        <div className="footerCnt">
        <p className="headerTxt">
        Amazon Payment Products 
          </p>
          <Link to="">Amazon Business Card</Link><br></br>
          <Link to="">Shop with Points</Link><br></br>
          <Link to="">Reload Your Balance</Link><br></br>
          <Link to="">Amazon Currency Converter</Link>
        </div>
        <div className="footerCnt">
        <p className="headerTxt">
        Let Us Help You
          </p>
          <Link to="">Amazon and COVID- <br></br>19</Link><br></br>
          <Link to="">Your Account</Link><br></br>
          <Link to="">Your Orders</Link><br></br>
          <Link to="">Shipping Rates & <br></br>Policies</Link><br></br>
          <Link to="">Returns & <br></br> Replacements</Link><br></br>
          <Link to="">Manage Your <br></br> Content and Devices</Link><br></br>
          <Link to="">Amazon Assistant</Link><br></br>
          <Link to="">Help</Link>
        </div>
        </div>
      
        <div className="foterbt">
          
          <div>
           <img src={AmazonLogo} style={{ height:'40px',objectFit:'cover'}}/>
          </div>
        
          <div className="shiftLogo">
          {[ 'bottom'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <div className="bg-white p-5">

        </div>
      }
                          
    >
              <img src={English}/>
              
            </OverlayTrigger>
  ))}
          </div>

          <div>
        <img src={UsDollar}/>
        </div>

          <div >
            <img src={UnitedFlag} />
    </div>
      </div>
      
        <div className="subFooter">

        <Row className="microFooter">
         
          <Col className="subHd">
            <p className="subCnt">
            Amazon Music
            </p>
            <Link to="">Stream millions <br></br>of songs</Link>
          </Col>
                  
          <Col className="subHd">
                    <p className="subCnt">
                    Amazon <br></br> Advertising
                    </p>
                    <Link to="">Find, attract, and <br></br>engage customers</Link>
                  </Col>
                  <Col className="subHd">
                    <p className="subCnt">
                    Amazon Drive
                    </p>
                    <Link to="">Cloud storage <br></br>
        from Amazon</Link>
                  </Col>
                  <Col className="subHd">
                    <p className="subCnt">
                    6pm
                    </p>
                    <Link to="">Score deals <br></br>
        on fashion <br></br> brands</Link>
                  </Col>C
                  <Col className="subHd">
                    <p className="subCnt">
                    AbeBooks
                    </p>
                    <Link to="">Books, art <br></br>
        & collectibles</Link>
                  </Col>
                  <Col className="subHd">
                    <p className="subCnt">
                    ACX
                    </p>
                    <Link to="">Audiobook <br></br> Publishing  <br></br> 
        Made Easy</Link>
                  </Col>
                  <Col className="subHd">
                    <p className="subCnt">
                    Alexa
                    </p>
                    <Link to="">Actionable Analytics <br></br>
        for the Web</Link>
        </Col>

        </Row>
      
        <Row className="microFooter">
         
         <Col className="subHd">
           <p className="subCnt">
           Sell on<br></br> Amazon
           </p>
           <Link to="">Start a Selling<br></br> Account</Link>
 </Col>
         
 <Col className="subHd">
           <p className="subCnt">
           Amazon <br></br>Business
           </p>
           <Link to="">Everything For <br></br>
Your Business</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           AmazonGlobal
           </p>
           <Link to="">Ship Orders<br></br>
Internationally</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           Home Services
           </p>
           <Link to="">Experienced<br></br> Pros
Happiness<br></br> Guarantee</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           Amazon Ignite
           </p>
           <Link to="">Sell your original <br></br>
Digital Educational<br></br>
Resources</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           Amazon Web <br></br> Services
           </p>
           <Link to="">Scalable Cloud <br></br>
Computing <br></br> Services</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           Audible
           </p>
           <Link to="">Listen to Books & <br></br>Original<br></br>
Audio Performances</Link>
</Col>

       </Row>
     
      
       <Row className="microFooter">
         
         Col<Col className="subHd">
           <p className="subCnt">
           Book<br></br> Depository
           </p>
           <Link to="">Books With Free <br></br>
Delivery <br></br>Worldwide</Link>
 </Col>
         
 <Col className="subHd">
           <p className="subCnt">
           Box Office Mojo
           </p>
           <Link to="">Find Movie<br></br>
Box Office Data</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           ComiXology
           </p>
           <Link to="">Thousands of<br></br>
Digital Comics</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           DPReview
           </p>
           <Link to="">Digital<br></br>
Photography</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           East Dane
           </p>
           <Link to="">Designer Men's<br></br>
Fashion</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           Fabric
           </p>
           <Link to="">Sewing, Quilting<br></br>
& Knitting</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           Goodreads
           </p>
           <Link to="">Book reviews<br></br>
& recommendations</Link>
</Col>

       </Row>

       <Row className="microFooter">
         
         <Col className="subHd">
           <p className="subCnt">
           Zappos
           </p>
           <Link to="">  Shoes &<br></br>
Clothing</Link>
 </Col>
         
 <Col className="subHd">
           <p className="subCnt">
           IMDb
           </p>
           <Link to="">Movies, TV<br></br>
& Celebrities</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           IMDbPro
           </p>
           <Link to="">Get Info<br></br> Entertainment<br></br>
Professionals<br></br> Need</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           Kindle Direct <br></br> Publishing
           </p>
           <Link to="">Indie Digital & Print<br></br> Publishing<br></br>
Made Easy</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           Prime Video<br></br> Direct
           </p>
           <Link to="">Video<br></br> Distribution<br></br>
Made Easy</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           Shopbop
           </p>
           <Link to="">Designer<br></br>
Fashion Brands</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           Woot!
           </p>
           <Link to="">Deals and<br></br>
Shenanigans</Link>
</Col>

       </Row>
      
       <Row className="microFooter">
      
         <Col className="subHd">
           <p className="subCnt">
           Ring
           </p>
           <Link to="">Smart Home<br></br>
Security Systems</Link>
 </Col>
         
 <Col className="subHd">
           <p className="subCnt">
           eero WiFi
           </p>
           <Link to="">Stream 4K Video <br></br>
in Every Room</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           Blink
           </p>
           <Link to="">Smart Security  <br></br>
for Every Home</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           Neighbors App
           </p>
           <Link to="">Real-Time Crime  <br></br>
& Safety Alerts</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           Amazon Subscription<br></br> Boxes
           </p>
           <Link to="">Top subscription boxes – <br></br>right to your door</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           PillPack
           </p>
           <Link to="">Pharmacy<br></br> Simplified</Link>
         </Col>
         <Col className="subHd">
           <p className="subCnt">
           Amazon Second<br></br> Chance
           </p>
           <Link to="">Pass it on, trade it in, <br></br>
give it a second life</Link>
</Col>

       </Row>
      
          <div className="lastFt">
            <div  className="smFt">
            <Link to="">Conditions of Use</Link>
            </div>
            <div className="smFt">
            <Link to="">Privacy </Link>
            </div>
            <div className="smFt">
            <Link to="">NoticeInterest-Based Ads</Link>
            </div>
            <div className="copright smFt">
            © 1996-2021, Amazon.com, Inc. or its affiliates

         </div>
          
          </div>
      
          
        </div>
      </div>
      
    </>
  )
}
export default Footer;